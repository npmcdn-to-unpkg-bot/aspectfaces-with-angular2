package cz.cvut.fel.rysavfi1.aspectfaces.angular2;

import com.codingcrayons.aspectfaces.annotation.registration.pointCut.properties.Variable;
import com.codingcrayons.aspectfaces.composition.UIFragmentComposer;
import com.codingcrayons.aspectfaces.configuration.Configuration;
import com.codingcrayons.aspectfaces.configuration.ConfigurationStorage;
import com.codingcrayons.aspectfaces.configuration.Context;
import com.codingcrayons.aspectfaces.metamodel.JavaInspector;
import com.codingcrayons.aspectfaces.metamodel.MetaProperty;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Angular2Generator {

    /**
     * Generates entity structure for Angular 2 forms.
     */
    public static List<Angular2Field> generateStructure(Class<?> entity) throws Exception {
        // Get meta properties using AspectFaces
        Context context = initContext();
        List<MetaProperty> metaProperties = getMetaProperties(entity, context);

        // Init structure
        List<Angular2Field> structure = new ArrayList<>();

        /// Parse meta properties
        for (MetaProperty metaProperty : metaProperties) {
            Angular2Field field = new Angular2Field();
            field.setName(metaProperty.getName());
            field.setTag(context.getConfiguration().getTagPath(metaProperty, context));

            Map<String, Object> constraints = new HashMap<>();
            for (Variable variable : metaProperty.getTemplateVariables()) {
                String varName = variable.getName();
                Object varValue = variable.getValue();

                if (isVariableObserved(varName)) {
                    constraints.put(varName, varValue.toString());
                }
            }
            field.setConstraints(constraints);

            structure.add(field);
        }

        // printFieldMappings(metaProperties, context);

        return structure;
    }

    /**
     * Initializes AspectFaces context.
     */
    private static Context initContext() throws Exception {
        Context context = new Context();
        Configuration configuration = ConfigurationStorage.getInstance().getConfiguration("default");
        context.setConfiguration(configuration);
        return context;
    }

    /**
     * Gets AspectFaces meta properties.
     */
    private static List<MetaProperty> getMetaProperties(Class<?> entity, Context context) throws Exception {
        JavaInspector inspector = new JavaInspector(entity);
        List<MetaProperty> metaProperties = inspector.inspect(context);
        UIFragmentComposer composer = new UIFragmentComposer();
        metaProperties = composer.filterApplicable(metaProperties);
        metaProperties = composer.getOrderedFields(metaProperties, context);
        return metaProperties;
    }

    /**
     * List of ignored AspectFaces variables.
     */
    private static final String[] ignoredVariables = {
            "className", "ClassName", "dataType", "DataType", "DataTypeFullClassName", "email", "entityBean", "field",
            "fieldName", "FieldName", "fragment", "fullClassName", "FullClassName", "instance", "notNull", "password",
            "value"
    };

    /**
     * Tell if AspectFaces variable if observed or not.
     */
    private static boolean isVariableObserved(String variable) {
        for (String ignoredVariable : ignoredVariables) {
            if (variable.equals(ignoredVariable)) {
                return false;
            }
        }
        return true;
    }

    private static void printFieldMappings(List<MetaProperty> metaProperties, Context context) throws Exception {
        System.out.println("[ENTITY]");
        System.out.println();
        for (MetaProperty metaProperty : metaProperties) {
            System.out.println("[PROPERTY]");
            System.out.println(metaProperty.getName() + " " + context.getConfiguration().getTagPath(metaProperty, context));
            System.out.println();
            for (Variable var : metaProperty.getTemplateVariables()) {
                System.out.println(var.getName() + " " + var.getValue());
            }
            System.out.println();
        }
    }

}

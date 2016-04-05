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

    public static List<Angular2Field> generateStructure(Class<?> entity, String configurationName) throws Exception {
        // Get meta properties using AspectFaces
        Context context = initContext(configurationName);
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

            if (metaProperty.getVariable("dataType").getValue().equals("enum")) {
                List<Object> options = new ArrayList<>();
                Class c = Class.forName((String) metaProperty.getVariable("DataTypeFullClassName").getValue());
                for (Object o : c.getEnumConstants()) {
                    options.add(o);
                }
                field.setOptions(options);
            }

            structure.add(field);
        }

        return structure;
    }

    private static Context initContext(String configurationName) throws Exception {
        Context context = new Context();
        Configuration configuration = ConfigurationStorage.getInstance().getConfiguration(configurationName);
        context.setConfiguration(configuration);
        return context;
    }

    private static List<MetaProperty> getMetaProperties(Class<?> entity, Context context) throws Exception {
        JavaInspector inspector = new JavaInspector(entity);
        List<MetaProperty> metaProperties = inspector.inspect(context);
        UIFragmentComposer composer = new UIFragmentComposer();
        metaProperties = composer.filterApplicable(metaProperties);
        metaProperties = composer.getOrderedFields(metaProperties, context);
        return metaProperties;
    }

    private static final String[] ignoredVariables = {
            "className", "ClassName", "dataType", "DataType", "DataTypeFullClassName", "email", "entityBean", "field",
            "fieldName", "FieldName", "fragment", "fullClassName", "FullClassName", "instance", "notNull", "password",
            "value"
    };

    private static boolean isVariableObserved(String variable) {
        for (String ignoredVariable : ignoredVariables) {
            if (variable.equals(ignoredVariable)) {
                return false;
            }
        }
        return true;
    }

}

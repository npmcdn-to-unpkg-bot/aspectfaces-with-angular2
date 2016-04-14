package cz.cvut.fel.rysavfi1.afwa2.util;

import com.codingcrayons.aspectfaces.annotation.registration.pointCut.properties.Variable;
import com.codingcrayons.aspectfaces.composition.UIFragmentComposer;
import com.codingcrayons.aspectfaces.configuration.Configuration;
import com.codingcrayons.aspectfaces.configuration.ConfigurationStorage;
import com.codingcrayons.aspectfaces.configuration.Context;
import com.codingcrayons.aspectfaces.exceptions.AnnotationNotFoundException;
import com.codingcrayons.aspectfaces.exceptions.AnnotationNotRegisteredException;
import com.codingcrayons.aspectfaces.exceptions.ConfigurationFileNotFoundException;
import com.codingcrayons.aspectfaces.exceptions.ConfigurationNotFoundException;
import com.codingcrayons.aspectfaces.exceptions.ConfigurationParsingException;
import com.codingcrayons.aspectfaces.exceptions.EvaluatorException;
import com.codingcrayons.aspectfaces.metamodel.JavaInspector;
import com.codingcrayons.aspectfaces.metamodel.MetaProperty;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FormDataGenerator {

    /**
     * Generates entity structure using AspectFaces for Angular 2 forms.
     */
    public static List<Angular2Field> generateStructure(Class<?> entity, String configurationName)
            throws ConfigurationNotFoundException, ConfigurationFileNotFoundException, ConfigurationParsingException,
            EvaluatorException, AnnotationNotFoundException, AnnotationNotRegisteredException, ClassNotFoundException {
        // Get AspectFaces meta properties
        Context context = initContext(configurationName);
        List<MetaProperty> metaProperties = getMetaProperties(entity, context);

        // Init structure
        List<Angular2Field> structure = new ArrayList<>();

        // Parse meta properties
        for (MetaProperty metaProperty : metaProperties) {
            // Init field
            Angular2Field field = new Angular2Field();
            field.setName(metaProperty.getName());
            field.setTag(context.getConfiguration().getTagPath(metaProperty, context));

            // Get constraints
            Map<String, Object> constraints = new HashMap<>();
            for (Variable variable : metaProperty.getTemplateVariables()) {
                String varName = variable.getName();
                Object varValue = variable.getValue();

                if (isVariableObserved(varName)) {
                    constraints.put(varName, varValue.toString());
                }
            }
            field.setConstraints(constraints);

            // Get options
            if (metaProperty.getVariable("dataType").getValue().equals("enum")) {
                List<Angular2Option> options = new ArrayList<>();
                Class c = Class.forName((String) metaProperty.getVariable("DataTypeFullClassName").getValue());
                for (Object o : c.getEnumConstants()) {
                    Angular2Option option = new Angular2Option();
                    option.setValue(o);
                    options.add(option);
                }
                field.setOptions(options);
            }

            // Add field to structure
            structure.add(field);
        }

        return structure;
    }

    /**
     * Initializes AspectFaces context.
     */
    private static Context initContext(String configurationName)
            throws ConfigurationNotFoundException, ConfigurationParsingException, ConfigurationFileNotFoundException {
        Context context = new Context();
        Configuration configuration = ConfigurationStorage.getInstance().getConfiguration(configurationName);
        context.setConfiguration(configuration);
        return context;
    }

    /**
     * Gets AspectFaces meta properties.
     */
    private static List<MetaProperty> getMetaProperties(Class<?> entity, Context context)
            throws EvaluatorException, AnnotationNotFoundException, AnnotationNotRegisteredException {
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
     * Tells if AspectFaces variable if observed or not.
     */
    private static boolean isVariableObserved(String variable) {
        for (String ignoredVariable : ignoredVariables) {
            if (variable.equals(ignoredVariable)) {
                return false;
            }
        }
        return true;
    }

}

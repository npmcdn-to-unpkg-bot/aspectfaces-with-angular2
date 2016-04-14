package cz.cvut.fel.rysavfi1.afwa2.annotation.descriptors;

import com.codingcrayons.aspectfaces.annotation.AnnotationProvider;
import com.codingcrayons.aspectfaces.annotation.registration.AnnotationDescriptor;
import com.codingcrayons.aspectfaces.annotation.registration.pointCut.VariableJoinPoint;
import com.codingcrayons.aspectfaces.annotation.registration.pointCut.properties.Variable;

import java.util.ArrayList;
import java.util.List;

public class UiPlaceholderAnnotationDescriptor implements AnnotationDescriptor, VariableJoinPoint {

    @Override
    public String getAnnotationName() {
        return "cz.cvut.fel.rysavfi1.aspectfaces.annotations.UiPlaceholder";
    }

    @Override
    public List<Variable> getVariables(AnnotationProvider annotationProvider) {
        List<Variable> variables = new ArrayList<>();
        variables.add(new Variable("placeholder", annotationProvider.getValue("value")));
        return variables;
    }

}

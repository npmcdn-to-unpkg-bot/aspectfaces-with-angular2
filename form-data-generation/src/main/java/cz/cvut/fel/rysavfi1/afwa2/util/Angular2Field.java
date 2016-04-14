package cz.cvut.fel.rysavfi1.afwa2.util;

import java.util.List;
import java.util.Map;

public class Angular2Field {

    private String name;

    private String tag;

    private Map<String, Object> constraints;

    private List<Angular2Option> options;

    public Angular2Field() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public Map<String, Object> getConstraints() {
        return constraints;
    }

    public void setConstraints(Map<String, Object> constraints) {
        this.constraints = constraints;
    }

    public List<Angular2Option> getOptions() {
        return options;
    }

    public void setOptions(List<Angular2Option> options) {
        this.options = options;
    }

}
package cz.cvut.fel.rysavfi1.aspectfaces.angular2;

import java.util.Map;

public class Angular2Field {

    private String name;

    private String tag;

    private Map<String, Object> constrains;

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

    public Map<String, Object> getConstrains() {
        return constrains;
    }

    public void setConstrains(Map<String, Object> constrains) {
        this.constrains = constrains;
    }

}

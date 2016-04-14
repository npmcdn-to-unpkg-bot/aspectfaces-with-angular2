package cz.cvut.fel.rysavfi1.afwa2.util;

public class Angular2Option {

    private String label;

    private Object value;

    public Angular2Option() {
    }

    public Angular2Option(String label, Object value) {
        this.label = label;
        this.value = value;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

}

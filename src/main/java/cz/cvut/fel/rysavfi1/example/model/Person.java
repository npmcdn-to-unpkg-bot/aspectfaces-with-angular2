package cz.cvut.fel.rysavfi1.example.model;

import com.codingcrayons.aspectfaces.annotations.UiIgnore;
import com.codingcrayons.aspectfaces.annotations.UiOrder;
import com.codingcrayons.aspectfaces.annotations.UiPassword;
import cz.cvut.fel.rysavfi1.aspectfaces.annotations.UiPlaceholder;
import org.hibernate.validator.constraints.Email;

import javax.validation.constraints.NotNull;

public class Person {

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private boolean termsAccepted;

    private boolean admin;

    public Person() {
    }

    public Person(String firstName, String lastName, String email, String password, boolean termsAccepted, boolean admin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.termsAccepted = termsAccepted;
        this.admin = admin;
    }

    @UiOrder(10)
    @UiPlaceholder("Enter your first name.")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @UiOrder(20)
    @UiPlaceholder("Enter your last name.")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Email
    @NotNull
    @UiOrder(30)
    @UiPlaceholder("Enter your e-mail.")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @NotNull
    @UiOrder(40)
    @UiPassword
    @UiPlaceholder("Enter your password.")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @NotNull
    @UiOrder(50)
    @UiPlaceholder("I agree with terms of use.")
    public boolean isTermsAccepted() {
        return termsAccepted;
    }

    public void setTermsAccepted(boolean termsAccepted) {
        this.termsAccepted = termsAccepted;
    }

    @UiIgnore
    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }

}

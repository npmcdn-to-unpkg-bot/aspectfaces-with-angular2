package cz.cvut.fel.rysavfi1.afwa2.model;

import com.codingcrayons.aspectfaces.annotations.UiIgnore;
import com.codingcrayons.aspectfaces.annotations.UiOrder;
import com.codingcrayons.aspectfaces.annotations.UiPassword;
import cz.cvut.fel.rysavfi1.afwa2.annotations.UiPlaceholder;
import org.hibernate.validator.constraints.Email;

import javax.validation.constraints.NotNull;

public class Person {

    public enum Gender {
        FEMALE,
        MALE
    }

    private String firstName;

    private String lastName;

    private Gender gender;

    private String email;

    private String password;

    private boolean termsAccepted;

    private boolean admin;

    public Person() {
    }

    public Person(String firstName, String lastName, Gender gender, String email, String password, boolean termsAccepted, boolean admin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.password = password;
        this.termsAccepted = termsAccepted;
        this.admin = admin;
    }

    @UiOrder(1)
    @UiPlaceholder("Enter your first name.")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @UiOrder(2)
    @UiPlaceholder("Enter your last name.")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @UiOrder(3)
    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @Email
    @NotNull
    @UiOrder(4)
    @UiPlaceholder("Enter your e-mail.")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @NotNull
    @UiOrder(5)
    @UiPassword
    @UiPlaceholder("Enter your password.")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @NotNull
    @UiOrder(6)
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

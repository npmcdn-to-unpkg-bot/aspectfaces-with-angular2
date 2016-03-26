package cz.cvut.fel.rysavfi1.example.rest;

import cz.cvut.fel.rysavfi1.aspectfaces.angular2.Angular2Field;
import cz.cvut.fel.rysavfi1.aspectfaces.angular2.Angular2Generator;
import cz.cvut.fel.rysavfi1.example.model.Person;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("angular2")
public class Angular2Endpoint {

    private static Person examplePerson = new Person("James", "Smith", "james.smith@gmail.com", "1234", true, false);

    @GET
    @Path("structure")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Angular2Field> getStructure() throws Exception {
        return Angular2Generator.generateStructure(Person.class);
    }

    @GET
    @Path("values")
    @Produces(MediaType.APPLICATION_JSON)
    public Person getValues() {
        return examplePerson;
    }

    @POST
    @Path("post")
    @Consumes(MediaType.APPLICATION_JSON)
    public void postValues(Person person) {
        examplePerson = person;
    }

}

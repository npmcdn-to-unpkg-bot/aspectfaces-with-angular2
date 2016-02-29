// TODO: Move to server side

export function convertStructureToAngular2(inputStructure) {
    var structure = [];

    inputStructure.fields.forEach(inputField => {
        var field = {
            label: null,
            max: null,
            maxLength: null,
            min: null,
            name: null,
            options: null,
            pattern: null,
            placeholder: null,
            required: null,
            size: null,
            tag: null
        };

        field.name = inputField.name;
        // TODO: Parse type
        field.tag = inputField.tag;

        inputField.contraints.forEach(inputConstrain => {
            if (inputConstrain.a == 'label') {
                field.label = inputConstrain.b;
            }
            else if (inputConstrain.a == 'max') {
                field.max = inputConstrain.b;
            }
            else if (inputConstrain.a == 'maxLength') { // maxlength?
                field.maxLength = inputConstrain.b;
            }
            else if (inputConstrain.a == 'min') {
                field.min = inputConstrain.b;
            }
            else if (inputConstrain.a == 'pattern') {
                field.pattern = inputConstrain.b;
            }
            else if (inputConstrain.a == 'placeholder') {
                field.placeholder = inputConstrain.b;
            }
            else if (inputConstrain.a == 'required') {
                if (inputConstrain.b == 'true') { // required?
                    field.required = 'required';
                } else {
                    field.required = null;
                }
            }
            else if (inputConstrain.a == 'size') {
                field.size = inputConstrain.b;
            }
            else {
                // TODO: email, notBlank, notNull, password, temporal, temporalType, type, unique
                console.log('Unsupported constrain: ' + inputConstrain.a);
            }
        });

        if (inputField.options != null) {
            field.options = [];

            inputField.options.forEach(inputOption => {
                field.options.push({
                    value: inputOption.a,
                    label: inputOption.b
                });
            });
        }

        structure.push(field);
    });

    return structure;
}

export function convertValuesToAngular2(inputValues) {
    var values = {};
    
    inputValues.fields.forEach(inputField => {
        values[inputField.a] = inputField.c;
    });
    
    return values;
}

export function convertStructureToAspectFaces(inputStructure) {

}

export function convertValuesToAspectFaces(inputValues) {

}
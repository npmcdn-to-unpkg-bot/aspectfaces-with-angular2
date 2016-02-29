# AspectFaces with Angular 2

AspectFaces integration to Angular 2 framework.

## Requirements

The example uses **Node.js** and **npm** to manage dependencies.

## Installation

First clone the repository to your drive. Then navigate to the project directory and run ```npm install``` to install dependencies. After that you can run the example by using ```npm start```.

## Usage

To generate the form you need to add the **af-form** tag (see example below). The **af-form** tag needs to specify the **structure** attribute and the **values** attribute. You can also specify the **edit** attribute.

```
<af-form [structure]="structure" [values]="values" [edit]="edit">Loading...</af-form>
```

The **structure** is a JSON object with the information about the form structure (see example below).

```
[
	{
		"label": "First name",
		"options": null,
		"tag": "inputTextTag",
		"max": null,
		"maxLength": null,
		"min": null,
		"name": "firstName",
		"pattern": null,
		"placeholder": "Enter your first name.",
		"required": "required",
		"size": null
	},
	{
		"label": "Last name",
		"options": null,
		"tag": "inputTextTag",
		"max": null,
		"maxLength": null,
		"min": null,
		"name": "lastName",
		"pattern": null,
		"placeholder": "Enter your last name.",
		"required": "required",
		"size": null
	}
]
```

The **values** is a JSON object with the information about the form structure (see example below).

```
{
	"firstName": "Filip",
	"lastName": "Ryšavý"
}
```

## Notes

- The current example renders the form and gets values from it. 
- The final form of **af-form**, **structure** and **values** may change during the development.
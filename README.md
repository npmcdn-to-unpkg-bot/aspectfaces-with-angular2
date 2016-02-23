# AspectFaces with Angular 2

AspectFaces integration to Angular 2 framework.

## Requirements

The example uses **Node.js** and **npm** to manage dependencies.

## Installation

First clone the repository to your drive. Then navigate to the project directory and run ```npm install``` to install dependencies. After that you can run the example on your server or you can use ```npm run lite-server``` or ```npm run http-server```.

## Usage

To generate the form you need to add the **af-form** tag (see example below). The **af-form** tag needs to specify the **formData** attribute. You can also specify the **edit** attribute.

```
<af-form [formData]="formData" [edit]="true">Loading...</af-form>
```

The **formData** is a JSON object with the information about the form structure (see example below).

```
{
	"name": "edu.baylor.icpc.persistence.port.Person",
	"fields": [
		{
			"label": "Email",
			"max": null,
			"maxLength": "255",
			"min": null,
			"name": "username",
			"options": null,
			"pattern": null,
			"placeholder": null,
			"required": "true",
			"size": "30",
			"tag": "input",
			"type": "email"
		}
	],
	"values": {
		"username": "aa@gmail.com"
	}
}
```

## Notes

The current example only renders the form. I'm working on getting the data and sending the back to application. The final form of **af-form** and **formData** will change during the development.
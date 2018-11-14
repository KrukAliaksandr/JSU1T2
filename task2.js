const jsonObject = require("./1.json");
let wrongParameters;
let areAllConditionsTrue = true;

function compareObject(objectForComparsion) {
	wrongParameters = {};
	if (typeof objectForComparsion.flag === "boolean") {

	}
	else {
		wrongParameters.flag = objectForComparsion.flag;
		areAllConditionsTrue = false;
	}
	if (Array.isArray(objectForComparsion.myPromises)) {

	}
	else {
		wrongParameters.myPromises = objectForComparsion.myPromises;
		areAllConditionsTrue = false;
	}
	if (typeof objectForComparsion.element === Object) {

	}
	else {
		wrongParameters.element = objectForComparsion.element;
		areAllConditionsTrue = false;
	}
	if (typeof objectForComparsion.screenshot === null) {

	}
	else {
		wrongParameters.screenshot = objectForComparsion.screenshot;
		areAllConditionsTrue = false;
	}
	if (typeof objectForComparsion.elementText === "string") {
	}
	else {
		console.log(typeof objectForComparsion.elementText)
		wrongParameters.elementText = objectForComparsion.elementText;
		areAllConditionsTrue = false;
	}
	if (objectForComparsion.allElementsText) {
	}
	else {
		wrongParameters.allElementsText = objectForComparsion.allElementsText;
		areAllConditionsTrue = false;
	}
	if (objectForComparsion.counter > 10) { }
	else {
		wrongParameters.counter = objectForComparsion.counter;
		areAllConditionsTrue = false;
	}
	if (objectForComparsion.config === "Common") {
	}
	else {
		wrongParameters.config = objectForComparsion.config;
		areAllConditionsTrue = false;
	}
	if (objectForComparsion.const.toLowerCase() === "FiRst".toLowerCase()) {

	}
	else {
		wrongParameters.const = objectForComparsion.const;
		areAllConditionsTrue = false;
	}

	if ((objectForComparsion.parameters).length === 8) {
	}

	else {
		wrongParameters.parameters = objectForComparsion.parameters;
		areAllConditionsTrue = false;
	}
	if (objectForComparsion.description.length > 5 && objectForComparsion.description.length < 13) {
	}
	else {
		wrongParameters.C = objectForComparsion.C;
		areAllConditionsTrue = false;
	}
	(areAllConditionsTrue === false) ? console.log(wrongParameters) : console.log("Ok");
}

compareObject(jsonObject);



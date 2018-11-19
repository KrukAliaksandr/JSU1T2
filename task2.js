/* eslint-disable no-console */
const jsonObject = require("./1.json");
const fs = require("fs");

const fileName = "incorrectParams.json";
let incorrectParams;

function compareObject(objectForComparsion) {
	incorrectParams = {};
	if (typeof objectForComparsion.flag !== "boolean") {
		writeIncorrectParameter("flag", objectForComparsion.flag);
	}
	if (!Array.isArray(objectForComparsion.myPromises)) {
		writeIncorrectParameter("myPromises", objectForComparsion.myPromises);
	}
	if (typeof objectForComparsion.element !== Object) {
		writeIncorrectParameter("element", objectForComparsion.element);
	}
	if (objectForComparsion.screenshot !== null) {
		writeIncorrectParameter("screenshot", objectForComparsion.screenshot);
	}
	if (typeof objectForComparsion.elementText !== "string") {
		writeIncorrectParameter("elementText", objectForComparsion.elementText);
	}
	if (typeof objectForComparsion.allElementsText !== "string" || !objectForComparsion.allElementsText.includes("const")) {
		writeIncorrectParameter("allElementsText", objectForComparsion.allElementsText);
	}
	if (objectForComparsion.counter <= 10) {
		writeIncorrectParameter("counter", objectForComparsion.counter);
	}
	if (objectForComparsion.config !== "Common") {
		writeIncorrectParameter("config", objectForComparsion.config);
	}
	if (objectForComparsion.const.toLowerCase() !== "FiRst".toLowerCase()) {
		writeIncorrectParameter("const", objectForComparsion.const);
	}
	if ((objectForComparsion.parameters).length !== 8) {
		writeIncorrectParameter("parameters", objectForComparsion.parameters);
	}
	if (objectForComparsion.description.length <= 5 && objectForComparsion.description.length >= 13) {
		writeIncorrectParameter("description", objectForComparsion.description);
	}
	(incorrectParams.length !== 0) ? fs.writeFile(fileName, JSON.stringify(incorrectParams), "utf8", () => {
		console.log(fileName + "successfully created");
	}) : console.log("OK");
}

function writeIncorrectParameter(key, value) {
	incorrectParams[key] = value;
}
compareObject(jsonObject);
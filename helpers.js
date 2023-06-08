const fs = require("node:fs");

const { readFileSync, writeFileSync } = fs;

function readJSONFile(path, fileName){
    const collection = readFileSync(`${path}/${fileName}`, "utf-8")
    // reads the JSON turning into an array 
    return collection ? JSON.parse(collection) : []
    // creates the array, conditons 

}

function writeJSONFile(path, fileName, data){
    //  
    const data = JSON.stringify(data);
    // take the data make it JSON and put it in the file 
    return writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})
    // The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
}
module.exports = {
    readJSONFile, 
    writeJSONFile,
}
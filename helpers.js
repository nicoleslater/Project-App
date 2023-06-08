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
    
}
module.exports = {
    readJSONFile, 
    writeJSONFile,
}
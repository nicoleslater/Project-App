const fs = require("node:fs");
const { writeFileSync } = require("node:fs");

function writeJSONFile(path, fileName, data) {
  return writeFileSync(`${path}/${fileName}`, data, { encoding: "utf-8" });
}

module.exports = {
  writeJSONFile,
};
module.exports = {
    readJSONFile, 
    writeJSONFile,
}
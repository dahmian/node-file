"use strict";

exports.replaceInFile = replaceInFile;

function replaceInFile(searchString, replaceString, fileName) {
  var search = new RegExp(searchString, "g");
  var file = readFile(fileName);
  var content = file.replace(search, replaceString);
  writeFile(fileName, content);
}

function readFile(fileName) {
  var fileSystem = require("fs");
  return fileSystem.readFileSync(fileName, "utf-8");
}

function writeFile(fileName, content) {
  var fileSystem = require("fs");
  fileSystem.writeFileSync(fileName, content, "utf-8");
}

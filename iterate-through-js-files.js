"use strict";

exports.iterateThroughJs = iterateThroughJs;

function iterateThroughJs(rootPath, callback) {
  var fs = require("fs");
  var stats = fs.lstatSync(rootPath);
  if (isJavaScriptFile()) {
    callback(rootPath)
  } else if (stats.isDirectory()) {
    iterateDirectory(rootPath);
  }

  function iterateDirectory(rootPath) {
    var arrayOfFiles = fs.readdirSync(rootPath);
    for (var key in arrayOfFiles) {
      var path = arrayOfFiles[key];
      if (path.slice(0,1) !== ".") {
        iterateThroughJs(rootPath + "/" + path, callback);
      }
    }
  }

  function isJavaScriptFile() {
    return (stats.isFile(rootPath) && rootPath.slice(-3) === ".js");
  }
}

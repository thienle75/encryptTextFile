// Importing the fs module
let fs = require("fs")

module.exports.readInputDocument = () =>{
  // Intitializing the readFileLines with the file
  const readFileLines = filename =>
    fs.readFileSync(filename)
    .toString('UTF8')
    .split('\n');

  // Calling the readFiles function with file name
  let arr = readFileLines('inputFiles/inputDocument.txt');
  return arr
}

module.exports.readCensoredKey = () =>{
  // Intitializing the readFileLines with the file
  const readFileLines = filename =>
    fs.readFileSync(filename)
    .toString('UTF8')
    .split('\n');

  // Calling the readFiles function with file name
  let arr = readFileLines('inputFiles/censoredKey.txt');
  key = arr[0].split(/,|"([^"]+)"|'([^']+)'| /).filter(item => item !== undefined && item !=='')
  return key
}

module.exports.writeOutputDocument = (line) => {
  fs.writeFile('outputFiles/outputDocument.txt',line,(err) => {
    if (err) throw err;
    console.log('Saved!');
  });
}
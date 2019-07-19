var start = new Date()
const request = require("needle")
var timeTaken = new Date() - start;
console.log("needle load time took : "+timeTaken+"ms")
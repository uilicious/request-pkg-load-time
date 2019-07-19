var start = new Date()
const request = require("request")
var timeTaken = new Date() - start;
console.log("request load time took : "+timeTaken+"ms");
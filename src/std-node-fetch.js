var start = new Date()
const fetch = require("node-fetch")
var timeTaken = new Date() - start;
console.log("fetch load time took : "+timeTaken+"ms")
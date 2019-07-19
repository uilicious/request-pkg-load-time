var cache_start = new Date()
require('cache-require-paths');
var cache_time = new Date() - cache_start;
console.log("cache-require-paths load time took : "+cache_time+"ms");

var start = new Date()
const needle = require("needle")
var timeTaken = new Date() - start;
console.log("request load time took : "+timeTaken+"ms");
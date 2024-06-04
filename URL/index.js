let url = require("url")

let urls = "http://localhost:8080/default.html?year=2017&month=february"
let q = url.parse(urls,true)

console.log(q.pathname)
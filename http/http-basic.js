// Creating a basic server using http module


let http = require('http')
let url = require('url')

// function sayHello(req,res) {
//     res.writeHead(200,{'Content-type':"text/plain"});
//     res.end("Hello")
// }
// return hello at endpoint



// function sayHello(req,res) {
//     res.writeHead(200,{'Content-type':"text/plain"});
//     res.write(req.url)
//     res.end()
// }
// return the url 

function sayHello(req,res) {
    res.writeHead(200,{'Content-type':"text/plain"});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt)
}
//http://localhost:8080/?year=2017&month=July
//return 
http.createServer(sayHello).listen(6969)
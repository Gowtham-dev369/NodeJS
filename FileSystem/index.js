var http = require('http');
var fs = require('fs')

function readData(req,res){
    fs.readFile('Some.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    }
)

}

http.createServer(readData).listen(6969)


// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('Some.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);



// This Does not work 
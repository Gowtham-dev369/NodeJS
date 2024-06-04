let url = require("url");
let fs = require("fs");
let http = require("http");

function DynamicData(req, res) {
  let fileName = "." + url.parse(req.url, true).pathname;
  // console.log(fileName)
  fs.readFile(fileName, (err, data) => { // try not to use Sync it keeps loding
    if (err) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("404 Not found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
}
http.createServer(DynamicData).listen(6969);


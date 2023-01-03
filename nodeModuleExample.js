var http = require("http");
var dateFunc = require('./myFirstModule') 

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`The date and time currently are: ${dateFunc.myDateTime()}`+"<br>")
    res.end("Hello World!");
    console.log("Nodejs Server Running")
  })
  .listen(5000);

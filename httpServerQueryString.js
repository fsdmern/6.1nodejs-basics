//To accept input from client using query string
var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month + " " + q.day + "th";
    res.write(req.url + "<br>");
    res.end(txt);
    console.log("httpNodeServer Running");
  })
  .listen(5000);

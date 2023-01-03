var http = require("http");
var url = require("url");
var adr = "http://localhost:3000/default.htm?year=2022&month=december";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(adr, true);
    console.log(q.host);
    console.log(q.pathname);
    console.log(q.search);
    var qdata = q.query;
    console.log(qdata.month);
    console.log(qdata.year);
    res.end(qdata.month);
  })
  .listen(5000);

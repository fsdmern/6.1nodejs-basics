var http = require("http");
var fs = require("fs");
var fileName = "myfile2.txt";
http
  .createServer(function (req, res) {
    fs.open(fileName, "w", function (err, file) {
      if (err) throw err;
      console.log(`${fileName} has been Saved!`);
    });
  })
  .listen(5000);

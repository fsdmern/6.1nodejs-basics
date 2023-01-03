var http = require("http");
var fs = require("fs");
var fileName = 'myfile1.txt'
http
  .createServer(function (req, res) {
    fs.appendFile(fileName,"Created using appendFile", function (err) {
      if (err) throw err
      console.log(`File ${fileName} has been Saved!`);
    });
  })
  .listen(5000);

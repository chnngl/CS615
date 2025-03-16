var fs = require("fs");
//var readMe = fs.readFileSync("readMe.txt", "utf8");
//fs.writeFileSync("writeMe.txt", readMe);
fs.readFile("readMe.txt", "utf8", function (err, data) {
  console.log("File read!");
  fs.writeFile("writeMe.txt", data, function (err, data) {
    console.log("File written!");
  });
});
console.log("This is some code after the read-write code");

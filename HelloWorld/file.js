const fs = require("fs");

// fs.writeFileSync("./test.txt", "Hello World");
//
// fs.writeFile("./test.txt", "Hello World Asynchronous", (err) => {
//   console.log("error");
// });

// const result = fs.readFile("./contacts.txt", "utf-8");

// console.log(result);

// fs.readFile("./contacts.js", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });


//   fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());


// fs.cpSync("./test.txt","./copy.text")

// fs.unlinkSync("./copy.text");

console.log(fs.statSync("./test.txt"))



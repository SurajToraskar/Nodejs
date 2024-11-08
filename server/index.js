const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  return resp.send("Hello from Home Page");
});

app.get("/about", (req, resp) => {
  return resp.send(
    `Hello from About Page  name:${req.query.name} and age:${req.query.age}`
  );
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// const server = http.createServer(app);
// server.listen(1000);

// const myServer = http.createServer((req, resp) => {
//   if (req.url == "/favicon.ico") return resp.end("favicon");
//   const log = `${Date.now()}: ${req.method} ${req.url} New Request Received \n`;

//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   fs.appendFile("log.txt", log, (error, data) => {
//     resp.end("Hello from server");
//   });
//   switch (myUrl.pathname) {
//     case "/":
//       resp.end("Home");
//       break;
//     case "/About":
//       resp.end(`Hi ${myUrl.query.name}`);
//       break;
//     case "/signup":
//       if (req.method == "GET") resp.end("This is a SignUp Form");
//       break;
//     default:
//       resp.end("Not Found");
//       break;
//   }
// });

// myServer.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

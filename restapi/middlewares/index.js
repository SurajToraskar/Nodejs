const fs = require("fs");
console.log("Middleware");
function logReqResp(fileName) {
  return (req, resp, next) => {
    const log = `\n ${Date.now()} : ${req.ip} : ${req.method}`;
    fs.appendFile(fileName, log, (error) => {
      console.log(error);
      next();
    });
  };
}

module.exports = {
  logReqResp,
};

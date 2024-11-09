const express = require("express");
const { connectMongoDb } = require("./connection");
const app = express();
const PORT = 9000;
const userRouter = require("./routes/user");
const { logReqResp } = require("./middlewares");
app.use(express.urlencoded({ extended: false }));

connectMongoDb("mongodb://localhost:27017/youtube-app-1")
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(logReqResp("log.txt"));

app.use("/api/users", userRouter);

app.listen(PORT, (req, resp) => {
  console.log(`server is running on port ${PORT}`);
});

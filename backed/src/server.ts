// this is dev server
import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("hello from dev server with nodemon server");
});

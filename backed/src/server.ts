// this is dev server
import express from "express";

const app = express();

app.get('/', (req, res)=>{
  res.send("<h1>hello World</h1>")
})

app.listen(5000, () => {
  console.log("hello from dev server with nodemon server");
});

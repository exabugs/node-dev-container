import axios from "axios";
import express from "express";

const log = (x: string) => {
  console.log(x);
};

const app = express();
app.get("/todos", (_req, res) => {
  var x;
  if ((x = 0)) {
    // 比較演算子ではなく代入演算子になっている
    var b = 1;
  }

  axios({
    url: "https://jsonplaceholder.typicode.com/todos",
    params: { _limit: 3 },
  }).then(({ data }) => {
    res.type("json");
    res.json({ data });
  });
});

app.listen(3000);
log("http://localhost:3000/todos");

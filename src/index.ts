import axios from "axios";

const a = (x: string) => {
  console.log(x);
};

console.log(a("hello"));

axios({
  url: "https://jsonplaceholder.typicode.com/todos",
  params: { _limit: 3 },
}).then((a) => {
  console.log(JSON.stringify(a.data, null, "  "));
});

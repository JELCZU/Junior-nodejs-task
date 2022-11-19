const express = require("express");
const app = express();

// interface product {
//   Id: string;
//   Name: string;
//   Price: number;
//   UpdateDate: number;
// }
// interface test {
//   someNumber: number;
// }
// const someNumberMyNumber = [];
// const products: product[];
const products = [{ Id: "1", Name: "abc", Price: 20, actualData: Date.now() }];

// console.log(Date.now())
app.get("/", function (req, res, next) {
  res.json({ status: "Sukces!" });
});

app.post("/addProduct", function (req, res, next) {
res.json();
products.push({ Id: (products.length+1)+"", Name: "abc", Price: 20, actualData: Date.now() });
  
});

app.get("/Products", function (req, res, next) {
  res.json(products);
});
app.get("/Product/:id", function (req, res, next) {
  let productId=products.findIndex((product) => product.Id == req.params.id)
  // console.log(productId)
  res.json(products[productId]);
});

app.delete("/Product/:id", function (req, res, next) {
  let productId=products.findIndex((product) => product.Id == req.params.id)
  // console.log(productId)
  products.splice(productId,1)
  res.json();
});


app.listen(8080, function () {
  console.log("listening!");
});
console.log(products);

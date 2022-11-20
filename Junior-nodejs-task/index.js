// const mongoose=require('mongoose')
require ('./db/mongoose');
const Product=require('./db/models/product');
const express = require("express");

// const { MongoClient } = require("mongodb");
const app = express();


//model




const createProduct=async (data)=>{
  try{const user=new Product(data)
    await user.save()
    console.log(user)}
    catch(error){console.log(error)}
}

const removeProduct=async (id)=>{
  try{Product.findByIdAndDelete(id,(err,docs)=>{
    if(err){console.log(err)}
  })
     }
    catch(error){console.log(error)}
}
createProduct({name:"as4as4d3796755a92d461960bcasd3796755a92d461960bc2", price: 123,updateDate:Date.now()     })
// removeProduct("63796755a92d461960bc91b8");
async function findUsers(){
  console.log(User)
  try{
    const users=await Product.find({})
    console.log(users)
  }
catch(error){
  console.log(error)
}
}
// findUsers()
// createProduct()
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
// console.log(products);
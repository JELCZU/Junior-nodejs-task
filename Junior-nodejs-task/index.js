require ('./db/mongoose');
const Product=require('./db/models/product');
const express = require("express");
const bodyParser=require("body-parser")
const app = express();
const jsonParser=bodyParser.json()


async function createProduct (data){
  try{const user=new Product(data)
    await user.save()
    console.log(user)}
    catch(error){console.log(error)}
}

 async function deleteProduct(id){
  try{await Product.findByIdAndDelete(id)
     }
    catch(error){console.log(error)}
}

async function updateProduct (id,update){
  try{await Product.findByIdAndUpdate(id,update,{ runValidators: true })

     }
    catch(error){console.log(error)}
}
async function getProducts (){
  try{return await Product.find({})
     }
    catch(error){console.log(error)}
}
async function getProduct (id){
  try{return await Product.findById(id)
     }
    catch(error){console.log(error)}
}

// app.get("/", function (req, res, next) {
//   res.json({ status: "Sukces!" });
// });

app.post("/Products",jsonParser , async function (req, res, next) {
 
  try{ createProduct({name:req.body.name,price:req.body.price,updateDate:Date.now()})}
  catch(error){
    console.log(error)
  }
  res.json()
});

 app.get("/Products", async function (req, res, next) {
  res.json(await getProducts());
});
app.get("/Product/:id", async function (req, res, next) {
  res.json(await getProduct (req.params.id));
});

app.delete("/Product/:id", function (req, res, next) {
  deleteProduct (req.params.id)
  res.json();
});

app.put("/Product/:id",jsonParser, function (req, res, next) {
updateProduct (req.params.id,{name:req.body.name,price:req.body.price,updateDate:Date.now()})
  res.json();
});


app.listen(8080, function () {
  console.log("listening!");
});
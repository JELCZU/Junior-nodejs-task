const mongoose=require('mongoose')

const Product=mongoose.model('Product',{
  name:{
    type:String,
    unique:true,
    validate(value){
      if(value.length>100){
        throw new Error("Name is to long, name max lenght is 100 characters")
      }
      if(value.replace(/ /g,"").length==0){
        throw new Error("Name is requied")
      }
    }
  },
  price:{
    type:Number,
    required:true,
  },
  updateDate:{
    type:Date,
    required:true,
  }
})
module.exports=Product
const product=require('../models/product.model');
// function delete(){
//     // 
// }
const deleted=()=>{
// product.drop();
product.deleteMany()
console.log("Ho gya");
}
deleted();
'use strict'
const mongoose=require('mongoose'); 

const CartImg = new mongoose.Schema({
    nameImg: {type:String},
    img: {type:String},
    price: {type:String},
});

module.exports=CartImg;
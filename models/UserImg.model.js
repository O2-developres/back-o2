'use strict'
const mongoose=require('mongoose'); 

const UserImg = new mongoose.Schema({
    nameImg: {type:String},
    img: {type:String},
    description:{type:String},
    priceImg:{type:String}
    
});

module.exports=UserImg;
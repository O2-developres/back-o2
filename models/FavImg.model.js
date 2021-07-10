'use strict'
const mongoose=require('mongoose'); 

const FavImg = new mongoose.Schema({
    nameImg: {type:String},
    img: {type:String},
    
});

module.exports=FavImg;
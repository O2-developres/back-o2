'use strict'
const mongoose=require('mongoose'); 

const contact = new mongoose.Schema({
    firstName: {type:String},
    lastName: {type:String},
    userEmail: {type:String},
    message: {type:String},
    
    
});

module.exports=contact;
'use strict '

const mongoose=require('mongoose');
const contact =require('./contact.model')

const adminSchema= new mongoose.Schema({
    email:{type:String},
    name:{type:String},
    contactUs:[contact]

})


const adminModel=mongoose.model('adminuser',adminSchema)


const seedAdmin=()=>{
    const ibrahem = new adminModel({
    email:'ibrahem.omari96@gmail.com',
    name:'ibrahem alomari',
    contactUs:[{
        firstName: 'ahmad ',
        lastName: ' nofal',
        userEmail: 'anofal719@gmail.com',
        message: 'i love your work '
    }]

});



console.log(ibrahem)
ibrahem.save()

}

// seedAdmin();
module.exports={adminModel,seedAdmin}
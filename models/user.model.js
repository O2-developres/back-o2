'use strict '

const mongoose=require('mongoose');
const CartImg =require('./CartImg.model')
const UserImg =require('./UserImg.model')
const FavImg =require('./FavImg.model')


const userSchema= new mongoose.Schema({
    email:{type:String},
    name:{type:String},
    cart:[CartImg],
    favImg:[FavImg],
    userData:[UserImg]

})

const userModel=mongoose.model('userdata',userSchema)


const seedUser=()=>{
        const ahmad = new userModel({
        email:'anofal719@gmail.com',
        name:'ahmad nofal',
        userData:[{
            nameImg: 'ronaldo',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg',
            description:'ronaldo the amazing one',
            priceImg:'200'
        
         }],
        favImg:[{
            nameImg: 'ronaldo',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg',
        }],
        cart:[{
            nameImg: 'ronaldo ',
            img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg',
            price: '200',
             }]
    });
    console.log(ahmad)
    ahmad.save()
    
}

// seedUser();
module.exports={userModel,seedUser}
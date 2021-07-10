'use strict'
const {userModel , seedUser} = require('../models/user.model') 
const UserController=(req, res)=> {
    // let obj=seedUser();
    //     res.send(obj)
    
        let email= req.query.email;
        
        userModel.findOne({ email: email},  (error, user)=> {
        if (error) {
            res.send(error.message)
        } 
            res.json(user); 
        console.log(user)
        });
}


const createController=(req,res)=>{
    
    const {email ,nameImg ,img, description,priceImg }=req.body
    userModel.findOne({email:email}, (error,user)=>{
        if(error){
            res.send(error)
        }
        const newGallary = {
            nameImg:nameImg,
            img:img,
            description:description,
            priceImg:priceImg
        }
        user.userData.push(newGallary);
        user.save();
        res.json(user)
    
    })
}


const updatController=(req,res)=>{
    const imgId=req.params.img_id;
    const {email ,nameImg ,img, description,priceImg}=req.body;
    userModel.findOne({email:email},(error,user)=>{
        if(error){
            res.send(error)
        }
        const newGallary = {
            nameImg:nameImg,
            img:img,
            description:description,
            priceImg:priceImg
        }
        user.userData.splice(imgId,1,newGallary);
        user.save();
        res.send(user)
    })

}


const deleteController=(req,res)=>{
    const imgId=req.params.img_id;
    const email =req.query.email;
    userModel.findOne({email:email},(error,user)=>{
        if(error){
            res.send(error)
        }
        
        user.userData.splice(imgId,1);
        user.save();
        res.send(user)
    })
}

module.exports={UserController,
                createController,
                updatController,
                deleteController}
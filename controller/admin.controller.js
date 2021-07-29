'use strict'
const {adminModel , seedAdmin} = require('../models/admin.model') 
const {userModel} = require('../models/user.model') 
const AdminController=(req, res)=> {
    // let obj=seedAdmin();
    //     res.send(obj)
    
        let email= req.query.email;
        adminModel.findOne({ email: email},  (error, admin)=> {
        if (error) {
            res.send(error.message)
        } 
            res.json(admin); 
        
        });
}
// ======================================================================

const createContact=(req,res)=>{

    const {email ,firstName ,lastName,message,userEmail}=req.body
    adminModel.findOne({email:email}, (error,admin)=>{
        if(error){
            res.send(error)
        }
        const newContact = {
            firstName: firstName,
            lastName: lastName,
            message: message,
            userEmail:userEmail
        };

        admin.contactUs.push(newContact);
        admin.save();
        res.send(admin.contactUs)
    
    })
}
//======================================
// delete user

const deleteUser=async(req,res)=>{
    const email=req.query.email;
    userModel.remove({email:email},(err,data)=>{
        if(err){
            res.send(err);
        }else{
            console.log('delete seccuss');
            userModel.find({},(err,data)=>{
                if(err){
                    res.send(err);
                }else{
                    res.send(data);
                }
            });
        }
    });

}


module.exports={AdminController,createContact,deleteUser}
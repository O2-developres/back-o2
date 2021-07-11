'use strict'
const {adminModel , seedAdmin} = require('../models/admin.model') 
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



module.exports={AdminController,createContact}
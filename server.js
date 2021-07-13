const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const mongoose=require('mongoose');
app.use(express.json());



const PORT=8000;
const gallaryController=require('./controller/gallary.controller');
const newsController=require('./controller/news.controller');
const {
      UserController,
      createController,
      updatController,
      deleteController,
      creatCartController,
      deleteCartController,
      creatFavoriteController,
      deleteFavoriteController}=require('./controller/userController');


const {AdminController,
        createContact}=require('./controller/admin.controller')

const {userModel}=require('./models/user.model')
mongoose.connect('mongodb://localhost:27017/Userart',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/',  (req, res) =>{ 
    res.send('Hello World') 
  });

//  for gallary ===============

app.get('/gallary',gallaryController);
app.get('/news', newsController);




app.listen(PORT, ()=>{
    console.log('started server on port 8000')
  }) ;



//  for profile =================

app.get('/profile', UserController);
app.post('/profile',createController);
app.put('/profile/:img_id',updatController);
app.delete('/profile/:img_id',deleteController);



//  for  cart =================

app.post('/cart',creatCartController)
app.delete('/cart/:img_id',deleteCartController)


//  for favorite =================

app.post('/favorite',creatFavoriteController)
app.delete('/favorite/:img_id',deleteFavoriteController)


//  for admin for contact us =======

app.get('/admin', AdminController)
app.post('/admin', createContact)


//  for store 
app.get('/store',(req,res)=>{
  userModel.find({ },  (error, user)=> {
    if (error) {
        res.send(error.message)
    } 
        res.send(user); 
    // console.log(user)
    });
})
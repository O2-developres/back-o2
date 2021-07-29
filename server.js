const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const mongoose=require('mongoose');
app.use(express.json());
// const jwt=require('jsonwebtoken');
// const jwksClient=require('jwks-rsa');



// const PORT=process.env.PORT;


// auth0

// const client = jwksClient({
//   // this url comes from your app on the auth0 dashboard 
//   jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
// });

// // this is a ready to use function
// const getKey=(header, callback)=>{
//   client.getSigningKey(header.kid, function(err, key) {
//       const signingKey = key.publicKey || key.rsaPublicKey;
//       callback(null, signingKey);
//     });
// }

// // 'Bearer ;alsdkj;laskd;lkasd;lkl'
// app.get('/authorize',(req,res)=>{
//   const token=req.headers.authorization.split(' ')[1];
//   jwt.verify(token,getKey,{},(err,user)=>{
//       if(err){
//           res.send('invalid token');
//       }
//       res.send(user)
//   })
//   res.send(token);
// });



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
      deleteFavoriteController,
      deletFromIdmain}=require('./controller/userController');


const {AdminController,
        createContact,
        deleteUser}=require('./controller/admin.controller')

const {userModel}=require('./models/user.model')
mongoose.connect('mongodb+srv://o2art:o2art301@cluster0.xyfts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/',  (req, res) =>{ 
    res.send('Hello World') 
  });

//  for gallary ===============

app.get('/gallary',gallaryController);
app.get('/news', newsController);







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
app.delete('/adminuser', deleteUser)
app.delete('/admin/:id', deletFromIdmain)


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



app.listen(process.env.PORT,()=>{
    console.log(`listening to port: ${process.env.PORT}`);
})
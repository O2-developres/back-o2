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
const {UserController,
      createController,
      updatController,
      deleteController}=require('./controller/userController');


mongoose.connect('mongodb://localhost:27017/Userart',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/',  (req, res) =>{ 
    res.send('Hello World') 
  });

app.get('/gallary',gallaryController);


app.listen(PORT, ()=>{
    console.log('started server on port 8000')
  }) ;


app.get('/news', newsController);


app.get('/profile', UserController);
app.post('/profile',createController)
app.put('/profile/:img_id',updatController)
app.delete('/profile/:img_id',deleteController)



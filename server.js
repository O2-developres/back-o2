const express = require('express') 
const app = express() 
const cors = require('cors');
app.use(cors())
require('dotenv').config();


const PORT=8000
const gallaryController=require('./controller/gallary.controller')
const newsController=require('./controller/news.controller')


app.get('/',  (req, res) =>{ 
    res.send('Hello World') 
  })

app.get('/gallary',gallaryController)


app.listen(PORT, ()=>{
    console.log('started server on port 8000')
  }) 


app.get('/news', newsController)






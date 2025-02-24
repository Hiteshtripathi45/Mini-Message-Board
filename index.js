const express = require('express')
const app = express()

app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.use(function(req,res,next){
  console.log(req)
  next()
})  

app.get('/',(req,res)=>{
    res.render('index', {messages})
})

app.get('/new',(req,res)=>{
    res.render('form')
})

app.post('/new',(req,res)=>{
  console.log(req.body)
  const {text, user} = req.body
  const added = new Data()

  messages.push({text,user,added})
  res.redirect('/')
})

app.get('/message/:index',(req,res)=>{
  const mes =messages[req.params.index]
  res.render('message',{mes})
})

app.listen(3000)
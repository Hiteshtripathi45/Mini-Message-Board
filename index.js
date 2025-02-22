const express = require('express')
const app = express()

app.set('view engine','ejs')

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

app.get('/',(req,res)=>{
    res.render('index', {messages})
})

app.get('/new',(req,res)=>{
    res.send()
})

app.listen(3000)
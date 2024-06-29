const express = require('express')
require('dotenv').config()

const app=express()
// const port=4000  ---use port from the .env file

app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/host',(req,res)=>{
    res.send('hello host')
})
app.get('/app',(req,res)=>{
    res.send(
        '<button type="button">Click Me!</button>'
    )
})
app.get('/nav',(req,res)=>{
    res.send(
        '<ul> <li><a href="default.asp">Home</a></li>  <li><a href="news.asp">New news</a></li>  <li><a href="contact.asp">Contact</a></li><li><a href="about.asp">About</a></li></ul>'
    )
})
app.listen(process.env.PORT,()=>{
    console.log(`example app listing on port ${process.env.PORT}`)
})
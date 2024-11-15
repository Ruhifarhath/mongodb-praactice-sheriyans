const express = require('express')
const app= express()

//is userModel me hamara model yani collections aa chuka hai 
//so ispe CRUD  perform karsakthe
const userModel= require('./usermodel')
app.get('/',(req,res)=>{
    res.send("hi")

})
//create operation for creating a same user ( everytime for now)
app.get('/create',async(req,res)=>{
    let createdUser= await userModel.create({
        name:"ruhi farhath",
        email: "k@gamil.com",
        username: "ruhi"
    })
    res.send(createdUser)
})

//find :gives array as o/p --> to fin
//findOne :gives object as o/p
// app.get('/read',async(req,res)=>{
//     let users= await userModel.findOne({username:"hhhh"})
//     res.send(users)
// })

app.get('/read',async(req,res)=>{
    let users= await userModel.find()
    res.send(users)
})


app.get('/update',async(req,res)=>{
   let updatedUser= await  userModel.findOneAndUpdate({username:"ruhi"},{name:"Ruhi farhath Siddavatam"},{new:true})
   res.send(updatedUser)
})


app.get('/delete',async(req,res)=>{
    let users= await userModel.findOneAndDelete({username:"hhhh"})
    res.send(users)
})

app.listen(3000,(req,res)=>{
    console.log("server running")
})

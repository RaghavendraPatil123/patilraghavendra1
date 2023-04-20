import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("saiteja")
})

app.get('/Aboutme',(req,res)=>{
    res.json({
        name:"saiteja",
        fathername:"rambabu"
    })
})
app.get('/Skills',(req,res)=>{
    res.json({
        Skills:"Fullstack"
    })
})
app.listen(7200,()=>console.log("my server"))
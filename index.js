const express=require('express')
const PORT=8000;
const path=require('path')

const app=express();

const public=path.join(__dirname,"public")

app.use("/home",express.static(public))

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`)
})
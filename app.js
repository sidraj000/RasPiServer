const express= require('express');
const app=express();

app.get('/print',(req,res)=>{
res.send('Sensor data will be shown here');
});

app.listen('3000',()=>{
    console.log('server started....');
});
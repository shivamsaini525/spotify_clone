const express=require('express');
const app= express();
const port=8000

// Api get 

app.get('/',(req,res)=>{

    res.send("Hello Shivam Saini")
});

app.listen(port,()=>{
    console.log("App Running on Port "+ port)
})

// UA2ZhS8I2E5XqvCR
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>czesc</h1>");


})

app.listen(port, ()=>{
    console.log(`server working on ${port}`)
});
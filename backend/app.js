import express from "express";
const app = express()
const port = 3000

app.use(express.json());

app.use("/app/",rootRouter);

app.get("/",(req,res)=>{
   res.json({
    message: "hello from server",
   }) 
})

app.listen({port},()=>{
    console.log("server started")
})
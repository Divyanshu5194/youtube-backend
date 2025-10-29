import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
import express from "express"
import { configDotenv } from "dotenv"
configDotenv()

const app=express()
const port=process.env.PORT


export const connectDB=async ()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{console.log("ERROR :",error);throw error})
        app.listen(port,(port)=>{`server listening on port ${port}`})
        console.log("connection instace : ",connectionInstance)
    }
    catch(error){
        console.log("ERROR :",error)
        process.exit(1)
    }
}
const express =require("express")
const connectDB=require("./config/db");
const useroute = require("./routes/userRoutes");
const cors = require("cors");
require("dotenv").config();
const app=express()
app.use(cors());
app.use(cors({
  origin: "http://localhost:3001",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
   

connectDB(); 
app.use(express.json());
app.use("/api",useroute);

PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log('server connected to http://localhost:${PORT}')
});
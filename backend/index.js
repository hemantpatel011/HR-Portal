import express from "express";
import AuthRouter from "./src/routers/auth.routes.js"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./src/config/db.js"

dotenv.config();


const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

app.use("/auth",AuthRouter);

app.get("/",(req,res) => {
    res.status(200).json({message: "Server Working"});
});

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server working at port ", port);
    connectDB();
})

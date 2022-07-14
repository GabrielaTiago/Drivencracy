import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


const server = express();
server.use(json(), cors());


server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});
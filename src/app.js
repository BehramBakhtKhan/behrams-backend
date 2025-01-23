import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// app.use is used for middleware or configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
//! the public below is a folder name which i created to store the images ...
app.use(express.static("public"))
app.use(cookieParser())

// routes
import userRouter from "./routes/user.routes.js"

//routes declaration
app.use("/api/v1/users", userRouter)

//https://localhost:8000/api/v1/users/register

export {app}
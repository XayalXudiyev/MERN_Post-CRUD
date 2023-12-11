import express from "express";
import cors from "cors"
import bodyParser from 'body-parser'
import dotenv from "dotenv"
import db from './config/db.js'
import authRouter from './routes/auth.js'
import postRouter from './routes/post.route.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use('/', authRouter)
app.use('/', postRouter)


const PORT = 5000


db()


app.listen(PORT, () => {
    console.log("server is running", PORT)
})
const express = require('express');
const app = express();
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const colors = require('colors')
const ProductRoutes = require('./routes/ProductRoutes')
const UserRoutes = require("./routes/UserRouter")


dotenv.config();

connectDB();

app.use(express.json());

app.use("/api",ProductRoutes)

app.use("/api",UserRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server Running on port ${PORT}`.bgBlue)
})


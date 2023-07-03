const express = require("express");
const app = express();
const configureMiddleware = require("./middleware/authMiddleware")
const connectDB = require("./config/db");
const PORT = 3001;
//Connecting Database
connectDB();
//Configuring Middleware
configureMiddleware(app);
const authRoutes = require("./routes/auth");
app.use("/api/v1/rumoney/auth", authRoutes);
app.listen(PORT, ()=>{
    console.log(`Server Is Running On Port ${PORT}`);
});
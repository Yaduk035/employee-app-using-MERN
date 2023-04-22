const express = require("express");
const bodyparser =  require("body-parser");
const cors = require("cors");
const dotenv = require ("dotenv");
const PORT = process.env.PORT_NUMBER || 3001;
const connectDatabase = require("./config/database")

const app = express();

//config
dotenv.config({path:"config/.env"})

//connecting to database
connectDatabase();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());


//Routes
const employee= require("./routes/employeeRoutes")
app.use("/api/v1",employee);

const user= require("./routes/userRoutes")
app.use("/api/v1",user);



app.listen(PORT,()=>{
    console.log(`server is started on http://localhost:${PORT}`)
})
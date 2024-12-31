const express =  require("express");
const app = express();
const userRoutes = require('./routes/user,routes');
dotenv.config();
const cookieParser = require('/cookie-parser');
const connect = require('./db/db');
connect()
//middlewares
app.use(express.json())
app.use(express.urlencoded( { extended: true }))
app.use(cookieParser())
app.use('/', userRoutes); 

module.exports = app;
// import { express } from "express";
const express = require('express');
//import { cors } from "cors";
const cors = require("cors");
const cookiePraser= require("cookie-parser") 
import 'dotenv/config';
import logger from './utils/logger';
import { connect } from './utils/database.connection';

import authRoutes from "./routes/auth";
//import refreshTokenRoutes from "./routes/refreshToken.js";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || "9090";

//app.use(cors());
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
app.use(express.json({ limit: "20mb" }));
app.use(cookiePraser());

app.listen(PORT, () => {
    logger.info(`🚀 server is up an running on PORT ${ PORT } `);
    connect();

});

//const Users = require("./routes/users.js");   //this is our middleware to connect routers and model
//app.use("/users",userrouter);
//app.use("/Users",Users)
app.use("/api", authRoutes);
//app.use("/api/refreshToken", refreshTokenRoutes);
app.use("/api", userRoutes);






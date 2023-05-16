const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/userRoutes.js");
const custRouter = require("./routes/customerRoutes.js");
const cookieparser = require('cookie-parser');
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieparser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use("/auth", router);
app.use("/customer",custRouter);
//Connecting to server

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

//Connecting to database

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
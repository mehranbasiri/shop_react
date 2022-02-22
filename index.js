//const productRouter = require("./product.router");
const authRoute = require("./auth");
const express = require("express");
//const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./models/User");

const productRoute = require("./product.router");
const cartRoute = require("./models/Cart");
const orderRoute = require("./models/Order");
const stripeRoute = require("./stripe");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// products route handler
app.use("/products", productRoute);
app.use("/auth", authRoute);
app.use("/users", userRoute);

app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/checkout", stripeRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Mock server is running on port ${port}`));

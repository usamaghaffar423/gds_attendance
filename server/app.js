// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Config/db.js"); // Import the MongoDB connection function
const sessionMiddleware = require("./Middlewares/session");
const employeeRoutes = require("./Routes/employeeRoutes");
const attendanceRoutes = require("./Routes/attendanceRoutes");
const sessionRoutes = require("./Routes/sessionRoutes");

const app = express();

// Connect to MongoDB
connectDB();

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client-side URL
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json());
app.use(sessionMiddleware);

// Routes
app.use("/api", employeeRoutes);
app.use("/api", attendanceRoutes);
app.use("/api", sessionRoutes);

module.exports = app;

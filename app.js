const express = require("express");
const connectDB = require("./config/db");


//* Database connection
connectDB();

const app = express();

app.use(express.json());

app.use("/city", require("./src/city"));

const PORT = 3000;

app.listen(PORT, () =>
    console.log(
        `Server running in on port ${PORT}`
    )
);
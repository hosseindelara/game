const express = require("express");
const connectDB = require("./config/db");


//* Database connection
connectDB();

const app = express();

app.use(express.json());

app.use("/game", require("./src/game"));
app.use("/roles", require("./src/roles"));

const PORT = 5000;

app.listen(PORT, () =>
    console.log(
        `Server running in on port ${PORT}`
    )
);
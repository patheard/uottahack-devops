"use strict";

const app = require("./app");

// Constants
const PORT = process.env.PORT;
const HOST = "0.0.0.0";

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
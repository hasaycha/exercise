const express = require("express");
const bp = require("body-parser")

const app = express();
const port = process.env.PORT || 4000;

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use(require("./routes/movie.controller"));

app.listen(port, () => console.log(`Server running on port ${port}`))

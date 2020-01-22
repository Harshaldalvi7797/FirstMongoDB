let mongoose = require("mongoose");

//Connection
mongoose.connect("mongodb://localhost/HHD")
    .then(() => console.log(`Connected`))
    .catch((error) => console.log(`something went wrong ${error}`))
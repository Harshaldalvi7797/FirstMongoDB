let mongoose = require("moongoose");


//connection
mongoose.connect("mongodb://localhost/HHD")
    .then(() => console.log(`connected to db`))
    .catch((error) => console.log(`something went wrong ${error.message}`));
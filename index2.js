let mongoose = require("mongoose");

//Connection
mongoose.connect("mongodb://localhost/HHD", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected`))
    .catch((error) => console.log(`something went wrong ${error}`))


let authorSchema = new mongoose.Schema({
    author: { name: String, required: true },
    website: { name: String, required: true },
    isPublished: { name: String, required: true }

})

let courseSchema = new mongoose.Schema({
    course: { name: String, required: true }

})

let authorsModel = mongoose.model("authors", authorSchema);
let courseModel = mongoose.model("course", courseSchema);
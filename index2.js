let mongoose = require("mongoose");

//Connection
mongoose.connect("mongodb://localhost/HHD", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Connected`))
    .catch((error) => console.log(`something went wrong ${error}`))


let authorSchema = new mongoose.Schema({
    author: { type: String, required: true },
    website: { type: String, required: true },
    isPublished: { type: Boolean, required: true }

})

let courseSchema = new mongoose.Schema({
    course: { type: String, required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "authors" }

})

let authorsModel = mongoose.model("authors", authorSchema);
let courseModel = mongoose.model("course", courseSchema);

async function createauthor(author, website, isPublished) {
    let data = new authorsModel({
        author,
        website,
        isPublished
    })
    let item = await data.save();
    console.log(item);
}

// createauthor("Vipul", "www.idea.com", true);

async function createcourse(course, authorId) {
    let data = new courseModel({
        course,
        authorId
    })
    let item = await data.save();
    console.log(item);
}
// createcourse("Javascript", "5e2937a7852ad5520859756d");

async function fetchdata() {
    let data = await courseModel
        .find()
        .populate("authorId")
    console.log(data);
}
fetchdata();
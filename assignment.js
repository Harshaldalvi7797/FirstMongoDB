let mongoose = require("mongoose");
//connection

mongoose.connect("mongodb://localhost/HHD")
    .then(() => console.log(`connected to db`))
    .catch((error) => console.log(`something went wrong ${error.message}`))



let courseSchema = new mongoose.Schema({

    tags: { type: [String], required: true },
    date: { type: Date, default: Date.now() },
    name: { type: String, required: true },
    author: { type: String, required: true },
    isPublished: { type: Boolean, required: true }

})

let courseModel = mongoose.model("authors", courseSchema);



async function displayBack() {
    let data = await courseModel
        .find()
        .and([{ "tags": "backend" }, { "isPublished": "true" }])
        .select("name author -_id")
        .sort("name");

    console.log(data);

}

displayBack();

async function displayFront() {
    let data = await courseModel
        .find({ "isPublished": true })
        .select("author -_id")
        .sort("-price")

    console.log(data);
}
displayFront();
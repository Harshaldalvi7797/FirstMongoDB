let mongoose = require("mongoose");


//connection
mongoose.connect("mongodb://localhost/HHD")
    .then(() => console.log(`connected to db`))
    .catch((error) => console.log(`something went wrong ${error.message}`));


let courseSchema = new mongoose.Schema({
    author: { type: String, required: true },
    price: { type: Number, required: true },
    course: [String],
    date: { type: Date, default: Date.now() },
    isPublished: { type: Boolean, required: true }
});


let courseModel = mongoose.model("courses", courseSchema);

async function Course() {
    let authorcourse = new courseModel({
        author: "Harshal",
        price: 250,
        course: ["React", "Node JS"],
        isPublished: true

    })
    let data = await authorcourse.save();
    console.log(data);
}
Course();
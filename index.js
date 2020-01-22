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
        author: "Sham",
        price: 550,
        course: ["ANgular", "EXpress JS"],
        isPublished: true

    })
    let data = await authorcourse.save();
    console.log(data);
}
Course();

//Fetch record
// $gt,$gte,$lt,$lte,$eq,$neq,$in,$nin
// and ,or
async function AllRecords() {
    let data = await courseModel
        // .find({ "author": "Saee" })
        // .select("author price -_id")
        // .sort("price")
        // .find(
        //     {
        //         "price":
        //         {
        //             $gte: 350, $lte: 600
        //         }
        //     }

        // )
        .find()
        .and([{ "price": 250 }, { "author": "Harshal" }])
        .select("author price -_id")
        .sort("-price")
    console.log(data);

}

AllRecords();
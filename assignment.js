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

// async function Itcourse() {
//     let authorcourse = new courseModel([

//         [
//             {
//                 "_id": "5a68fdc3615eda645bc6bdec",
//                 "tags": [
//                     "express",
//                     "backend"
//                 ],
//                 "date": "2018-01-24T21:42:27.388Z",
//                 "name": "Express.js Course",
//                 "author": "Vipul",
//                 "isPublished": true,
//                 "price": 10,
//                 "__v": 0
//             },
//             {
//                 "_id": "5a68fdd7bee8ea64649c2777",
//                 "tags": [
//                     "node",
//                     "backend"
//                 ],
//                 "date": "2018-01-24T21:42:47.912Z",
//                 "name": "Node.js Course",
//                 "author": "Vipul",
//                 "isPublished": true,
//                 "price": 20,
//                 "__v": 0
//             },
//             {
//                 "_id": "5a68fde3f09ad7646ddec17e",
//                 "tags": [
//                     "aspnet",
//                     "backend"
//                 ],
//                 "date": "2018-01-24T21:42:59.605Z",
//                 "name": "ASP.NET MVC Course",
//                 "author": "Vipul",
//                 "isPublished": true,
//                 "price": 15,
//                 "__v": 0
//             },
//             {
//                 "_id": "5a68fdf95db93f6477053ddd",
//                 "tags": [
//                     "react",
//                     "frontend"
//                 ],
//                 "date": "2018-01-24T21:43:21.589Z",
//                 "name": "React Course",
//                 "author": "Vipul",
//                 "isPublished": false,
//                 "__v": 0
//             },
//             {
//                 "_id": "5a68fe2142ae6a6482c4c9cb",
//                 "tags": [
//                     "node",
//                     "backend"
//                 ],
//                 "date": "2018-01-24T21:44:01.075Z",
//                 "name": "Node.js Course by Jack",
//                 "author": "Jack",
//                 "isPublished": true,
//                 "price": 12,
//                 "__v": 0
//             },
//             {
//                 "_id": "5a68ff090c553064a218a547",
//                 "tags": [
//                     "node",
//                     "backend"
//                 ],
//                 "date": "2018-01-24T21:47:53.128Z",
//                 "name": "Node.js Course by Mary",
//                 "author": "Mary",
//                 "isPublished": false,
//                 "price": 12,
//                 "__v": 0
//             },
//             {
//                 "_id": "5a6900fff467be65019a9001",
//                 "tags": [
//                     "Java",
//                     "Backend"
//                 ],
//                 "date": "2018-01-24T21:56:15.353Z",
//                 "name": "Angular Course",
//                 "author": "Vipul",
//                 "isPublished": true,
//                 "price": 15,
//                 "__v": 0
//             }
//         ]
//     ])

//     let data = await authorcourse.save();
//     console.log(data);
// }

// Itcourse();

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
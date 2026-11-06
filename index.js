const mongoose = require("mongoose");

// let url = "https://localhost:8080/users"

// mongoose.connect("mongodb://127.0.0.1:27017/test");

main()
   .then( (res) => {
        console.log("connnection successful");
   })
   .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// model
const User = mongoose.model("User", userSchema);

// delete
// User.deleteMany({age: 23}).then((res) => {
//     console.log(res);
// });
User.findByIdAndDelete("6aed9505526d47dbe87b4ea0").then((res) => {
    console.log(res);
});

// update
// User.findByIdAndUpdate( "6aed9505526d47dbe87b4ea0", {age: 77}, {new: true}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// // find
// User.findById( "6aed9505526d47dbe87b4ea0" )
//    .then((res) => {
//       console.log(res);
//    })
//    .catch((err) => {
//        console.log(err);
//    });

// insert
// User.insertMany([
//     {name: "Tony", email: "tony@gamil.com", age: 23},
//     {name: "Bob", email: "bob@gmail.com", age: 26},
//     {name: "Bruce", email: "bruce@gmail.com", age: 29},
// ]).then((res) => {
//     console.log(res);
// });

// const  user2 = new User({
//     name: "Eve",
//     email: "eve@gmail.com",
//     age:23
// });

// user2
//    .save()
//     .then((res) => {
//        console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// amazon database use korbo
const mongoose = require("mongoose");

main()
   .then( (res) => {
        console.log("connnection successful");
   })
   .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selliing"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String],
});


//Book <-- model
const Book = mongoose.model("Book", bookSchema);

// update
Book.findByIdAndUpdate(
    "6aedf43239e818c0bc35988d", 
    {price: -500}, 
    {runValidators: true})
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.errors.price.properties.message);
    });

// let book1 = new Book({
//     title: "Marvel Comics v2",
//     price: 500,
//     genre: ["comics", "superhero", "fiction"],
// });

// // data insert korar jon book1 create
// book1
//    .save()
//    .then((res) => {
//        console.log(res);
//    })
//    .catch((res) => {
//       console.log(err);
//    });
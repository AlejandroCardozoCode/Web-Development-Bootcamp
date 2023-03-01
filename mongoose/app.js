const mongoose = require("mongoose");

// connect to database

mongoose.set("strictQuery", false);
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const fruitSchema = new mongoose.Schema({
    name: String,
    ratting: Number,
    _id: Number,

});

const fruitCollection = mongoose.model("Fruit", fruitSchema);

// delete

fruitCollection.deleteOne({ _id: 11 }, function (err) {
    if (err) {
        console.log(err);
    }
})
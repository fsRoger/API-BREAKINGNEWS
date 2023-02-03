const mongoose = require('mongoose');

const connetcDatabase = () => {
    console.log("wait connecting to the database");
    mongoose.connect(
        "mongodb+srv://root:root@cluster0.adwel57.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true }
    );

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        console.log("we're connected!");
    });
};

module.exports = connetcDatabase;

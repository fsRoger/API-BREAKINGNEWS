const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

require("dotenv").config({ path: ".env" });

const connetcDatabase = () => {
    console.log("wait connecting to the database");
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
        console.log("we're connected!");
    });
};

module.exports = connetcDatabase;

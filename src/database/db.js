const mongoose = require('mongoose');

const connetcDatabase = () => {
    console.log("wait connecting to the database");

    mongoose.connect(
        'mongodb+srv://root:root@cluster0.adwel57.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifieldTopology: true, useFindAndModify:false }
    )
    .then(() => console.log("mongo db atlas connected")).catch((error) => console.log(error));
};

module.exports = connetcDatabase;

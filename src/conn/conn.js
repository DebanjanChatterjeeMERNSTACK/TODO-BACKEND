const mongoose = require("mongoose")

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://debanjan:debanjan@cluster0.oilnaff.mongodb.net/item", {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
        console.log("conneted db")
    }).catch((err) => {
        console.log(err)
    })
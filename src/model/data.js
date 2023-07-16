const mongoose = require("mongoose")

const todoshecma = new mongoose.Schema({
    id:{
        type:Number 
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type:String
    },
    phone: {
        type:Number
    }
})
const Todoschema = new mongoose.model("item", todoshecma)
module.exports = Todoschema;
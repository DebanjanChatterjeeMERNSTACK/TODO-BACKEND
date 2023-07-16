const express = require("express");
const cors = require("cors");
const app = express();
require("./conn/conn");
const User = require("./model/data")
const port = process.env.port || 9000

app.use(cors())
app.use(express.json());

app.post("/create", (req, res) => {
    const item = new User(req.body)
    item.save();

})

app.get("/read", async (req, res) => {
    const read = await User.find()
    res.send(read)
})

app.post("/update", (req, res) => {
    const { id,username,email,address,phone } = req.body
    User.findOneAndUpdate({ id: id }, { username:username, email: email,address:address,phone:phone }, (err, user) => {
        if (user) {
            res.send({ mess: "update" })
        } else {
            res.send(err)
        }
    })
})

app.post("/delete", (req, res) => {
    const { id } = req.body
    User.findOneAndDelete({ id: id }, { id: id }, (err, User) => {
        if (User) {
            res.send({ mess: "delete" })
        } else {
            res.send(err)
        }
    })
})

app.delete("/removeall", async (req, res) => {
    const remove = await User.deleteMany();
    res.send({ message: "Delete All ", user: remove })
})


app.listen(port, () => {
    console.log("connect port 9000")
})
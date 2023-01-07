const express = require("express")
const app = express()
require('dotenv').config();
require("./server/DB")
const bodyParser = require("body-parser")

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))
app.use("/admin", require("./Routes/adminRoutes"))
app.use("/", require("./Routes/userRoutes"))


// display error page
// app.get("*", (req, res) => {``
//     res.render("error")
// })

// set server port 
app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log(`Server is running on port ${process.env.PORT}`)
    }
})
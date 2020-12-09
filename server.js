const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile("/public/UpdateSnowBuddy.html", {
        root: __dirname
    });
})

app.listen(3000)
const express = require('express');
const app =express();

app.get("/", function (req,res) {
    res.json({
        message:"Hello world"
    });
});

app.listen(process.env.PORT || 8080)
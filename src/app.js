const express = require('express')
const bodyParser = require('body-parser')

const Constants = require('./Constants.json')
const Routers = require("./Routers.json")

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    next()
})

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

for (var feature in Routers) {
    app.use(Routers[feature].endpoint, require(Routers[feature].file))
}

app.listen(Constants.PORT, function() {
    console.log("server running on port " + Constants.PORT)
});
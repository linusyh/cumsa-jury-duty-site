const fs = require('fs')

const renderIndex = function (res, details) {
    res.render("index.html", details)
}

const constructMain = (req, res) => {
    fs.readFile("app/listings/first.json", (_, data) => {
        renderIndex(res, JSON.parse(data))
    })
}

const constructSupp = (req, res) => {
    fs.readFile("app/listings/second.json", (_, data) => {
        var feed_dict = JSON.parse(data)
        console.log(feed_dict)
        renderIndex(res, feed_dict)
    })
}

const constructLogin = (req, res) => {
    res.render("login.html")
}

exports.constructMain = constructMain
exports.constructSupp = constructSupp
exports.constructLogin = constructLogin

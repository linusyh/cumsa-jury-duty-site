const path  = require('path')
const fs    = require('fs')
const document_details = path.join("public/documents/details.json")

const construct = (req, res) => {
    fs.readFile(document_details, (err, data) => {
        var documents_list = JSON.parse(data)
        res.render("index.html", {"documents": documents_list})
    })
} 

exports.construct = construct

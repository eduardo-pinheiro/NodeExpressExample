const Response = require('./Response.js')

const e = require('./ErrorConstants.json')

exports.respond = function (response, code, message) {
    respond(response, code, message)
}

exports.unavailable = function(response) {
    respond(response, 503, e.UNAVAILABLE)
}

function respond(response, code, message) {
    const result = new Response(code, message)
    response.status(code).send(result)
    console.log(result)
}
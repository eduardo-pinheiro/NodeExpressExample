const json = require("./HttpCodes.json")

class Response {
    constructor(code, message) {
        this.code = code
        this.status = json.filter(e => e.code == this.code)[0].phrase
        this.message = message
    }
}

module.exports = Response
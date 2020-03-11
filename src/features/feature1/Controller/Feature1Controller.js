const Response = require('../../../utils/Response.js')

const useCase = require('../UseCase/Feature1Usecase.js')
const utils = require('../../../utils/ResponseUtils.js')

const errCodes = require('../../../utils/ErrorConstants.json')
const successCodes = require('../../../utils/SuccessConstants.json')

exports.getList = async function(request, response) {
    try {
        const result = await useCase.getList()
        if (result == undefined) {
            utils.unavailable(response)
        }
        else if (result == null || result.length == 0) {
            utils.respond(response, 404, errCodes.NOT_FOUND)
        }
        else utils.respond(response, 200, result)
    }
    catch(e) {
        utils.unavailable(response)
    }
}

exports.getObject = async function(request, response) {
    try {
        const result = await useCase.getObject(request.params.id)
        if (result == undefined) {
            utils.unavailable(response)
        }
        else if (result == null) {
            utils.respond(response,404, errCodes.NOT_FOUND)
        }
        else utils.respond(response, 200, result)
    }
    catch(e) {
        if (e.message == errCodes.INVALID_ID) {
            utils.respond(response, 400, e.message)
        }
        else utils.unavailable(response)
    }
}

exports.createObject = async function(request, response) {
    try {
        const result = await useCase.createObject(request.body)
        if (result == undefined) {
            utils.unavailable(response)
        }
        else utils.respond(response, 201, successCodes.CREATED)
    }
    catch(e) {
        if (e.message == errCodes.INVALID_BODY) {
            utils.respond(response, 400, e.message)
        }
        else utils.unavailable(response)
    }
}

exports.changeObject = async function(request, response) {
    try {
        const result = await useCase.changeObject(request.body)
        if (result == undefined) {
            utils.unavailable(response)
        }
        else if (result == null) {
            response.status(204).send(new Response(204, successCodes.NO_CONTENT))
        }
        else utils.respond(response, 200, successCodes.OK)
    }
    catch(e) {
        if (e.message == errCodes.INVALID_BODY) {
            utils.respond(response, 400, e.message)
        }
        else utils.unavailable(response)
    }
}

exports.deleteObject = async function(request, response) {
    try {
        const result = await useCase.deleteObject(request.params.id)
        if (result == undefined) {
            utils.unavailable(response)
        }
        else if (result == null) {
            response.status(204).send(new Response(204, successCodes.NO_CONTENT))
        }
        else utils.respond(response, 200, successCodes.OK)
    }
    catch(e) {
        if (e.message == errCodes.INVALID_ID) {
            utils.respond(response, 400, e.message)
        }
        else utils.unavailable(response)
    }
}
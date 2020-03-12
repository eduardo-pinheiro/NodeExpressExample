const Feature1 = require("../Model/Test.js")

const repository = require("../Repository/TestRepository.js")

const e = require("../../../utils/ErrorConstants.json")

exports.getObject = function(id) {
    if (!isNullOrEmpty(id) && !isNaN(id)) {
        return repository.getObject(id)
    }
    else {
        throw new Error(e.INVALID_ID)
    }
}

exports.getList = function() {
    return repository.getList()
}

exports.createObject = function(object) {
    if (object instanceof Feature1) {
        return repository.createObject(object)
    }
    else {
        throw new Error(e.INVALID_BODY)
    }
}

exports.changeObject = function(object) {
    if (object instanceof Feature1 && !isNaN(object.id)) {
        const currentObject = repository.getObject(object.id)
        if (currentObject == null) {
            throw new Error(e.INVALID_ID)
        }
        var newObject = {}
        if (object.attr1 != currentObject.attr2) {
            newObject.attr1 = object.attr1
        }
        if (object.attr2 != currentObject.attr2) {
            newObject.attr2 = object.attr2
        }
        if (object.attr3 != currentObject.attr3) {
            newObject.attr3 = object.attr3
        }
        return repository.changeObject(object.id, newObject)
    }
    else {
        throw new Error(e.INVALID_BODY)
    }
}

exports.deleteObject = function(id) {
    if (!isNaN(id)) {
        return repository.deleteObject(id);
    }
    else {
        throw new Error(e.INVALID_ID)
    }
}

function isNullOrEmpty(value) {
    return value === null || value.valueOf() === '' 
}


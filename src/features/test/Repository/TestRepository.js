const MongoClient = require('mongodb').MongoClient;

const Constants = require("../../../Constants.json");

exports.getList = async function() {
    try {
        const db = await MongoClient.connect(Constants.DB_URL)
        const dbo = db.db(Constants.DB_NAME)
        const result = await dbo.collection(Constants.DB_FEATURE1_COLLECTION).find({}).toArray()
        db.close()
        return result
    }
    catch (e) {
        console.log(e)
        return undefined
    }
}

exports.getObject = async function(id) {
    try {
        const db = await MongoClient.connect(Constants.DB_URL)
        const dbo = db.db(Constants.DB_NAME)
        const query = {
            "id": id
        }
        const result = await dbo.collection(Constants.DB_FEATURE1_COLLECTION).findOne(query)
        db.close()
        return result
    }
    catch (e) {
        console.log(e)
        return undefined
    }
}

exports.createObject = async function(object) {
    try {
        const db = await MongoClient.connect(Constants.DB_URL)
        const dbo = db.db(Constants.DB_NAME)
        const result = await dbo.collection(Constants.DB_FEATURE1_COLLECTION).insertOne(object)
        db.close()
        return result
    }
    catch (e) {
        console.log(e)
        return undefined
    }
}

exports.changeObject = async function(id, newObject) {
    try {
        const db = await MongoClient.connect(Constants.DB_URL)
        const dbo = db.db(Constants.DB_NAME)
        const query = {
            "id": id
        }
        const insertion = {
            $set: {
                newObject
            }
        }
        const result = await dbo.collection(Constants.DB_FEATURE1_COLLECTION).updateOne(query, insertion)
        db.close()
        return result
    }
    catch (e) {
        console.log(e)
        return undefined
    }
}

exports.deleteObject = async function(id) {
    try {
        const db = await MongoClient.connect(Constants.DB_URL)
        const dbo = db.db(Constants.DB_NAME)
        const query = {
            "id": id
        }
        const result = await dbo.collection(Constants.DB_FEATURE1_COLLECTION).deleteOne(query)
        db.close()
        return result
    }
    catch (e) {
        console.log(e)
        return undefined
    }
}
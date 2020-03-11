const express = require('express')
const router = express.Router()

const controller = require('../Controller/Feature1Controller.js')

router.get('/', function(req, res) {
    controller.getList(req, res)
})

router.get('/:id', function(req, res) {
    controller.getObject(req, res)
})

router.post('/', function(req, res) {
    controller.createObject(req, res)
})

router.put('/', function(req, res) {
    controller.changeObject(req, res)
})

router.delete('/:id', function(req, res) {
    controller.deleteObject(req, res)
})

module.exports = router
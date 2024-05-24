import tutorials from '../controllers/tutorial.controller.js'
import express from 'express'
export default function routeInit(app){
    let router = express.Router()

    router.get('/', tutorials.findAll)
    router.get('/:id', tutorials.findOne)
    router.get('/published', tutorials.findAllPublished)
    router.post('/', tutorials.create)
    router.post('/:id', tutorials.update)
    router.delete('/:id', tutorials.deleteOne)
    router.delete('/', tutorials.deleteAll)

    app.use('/api/tutorials', router);
}
import db from '../models/index.js'

const Tutorial = db.tutorials;
const Op = db.Sequalize.Op;

export default {
    create: (req, res) => {
        if (!req.body.title) {
            res.status(400).send({
                message: 'Content can not be empty!'
            });
            return;
        }
    
        let tutorial = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ?? false
        }
        Tutorial.create(tutorial)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || 'Server error'
                });
            });
    },

    findAll: (req, res) => {

    },

    findOne: (req, res) => {

    },

    update: (req, res) => {

    },

    deleteOne: (req, res) => {

    },

    deleteAll: (req, res) => {

    },

    findAllPublished: (req, res) => {

    }
}
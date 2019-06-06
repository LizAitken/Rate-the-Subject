const express = require('express');
const router = express.Router();
const SubjectsModel = require('../models/subjects');
  

router.get('/', async(req, res, next) => {
    const allSubjects = await SubjectsModel.getAll();

    res.render('main', {
        locals: {
            title: 'Rate the Subject',
            subjectsList: allSubjects
        },
        partials: {
            partial: 'partial-main'
        }
    });
});

router.post('/', (req,res) => {
    const {subject, rating} = req.body;

    SubjectsModel.update(subject, rating)
    .then(async () => {
        const allSubjects = await SubjectsModel.getAll();

        res.status(200).render('main', {
            locals: {
                title: 'Rate the Subject',
                subjectsList: allSubjects
            },
            partials: {
                partial: 'partial-main'
            }
        });
    })
    .catch((err) => {
        res.sendStatus(500).send(err.message);
    });

});

module.exports = router;


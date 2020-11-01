const router = require('express').Router();
let Guideline = require('../models/guideline.model');

router.route('/').get((req, res) => {
    Guideline.find()
        .then(guidelines => res.json(guidelines))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const number = req.body.number;
    const name = req.body.name;
    const description = req.body.description;
    const domain = req.body.domain;
    const template = req.body.template;

    const newGuideline = new Guideline({
        number,
        name,
        description,
        domain,
        template,
    });

    newGuideline.save()
        .then(() => res.json('Guideline added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Guideline.findById(req.params.id)
        .then(project => res.json(guideline))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Guideline.findByIdAndDelete(req.params.id)
        .then(() => res.json('Guideline deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
        .then(project => {
            guideline.number = req.body.number;
            guideline.name = req.body.name;
            guideline.description = req.body.description;
            guideline.domain = req.body.domain;
            guideline.template = req.body.template;

            guideline.save()
                .then(() => res.json('Guideline updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
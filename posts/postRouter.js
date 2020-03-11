const express = require('express');

const router = express.Router();

const db = require('../posts/postDb');

router.get('/', (req, res) => {
    // do your magic!
    db.get()
        .then(posts => res.status(200).json(posts))
        .catch(err => res.status(500).json({
            message: "Something went wrong trying to get the posts.",
            error: err,
            error_message: err.message
        }));
});

router.get('/:id', (req, res) => {
    // do your magic!
    db.getById(req.params.id)
});

router.delete('/:id', (req, res) => {
    // do your magic!
});

router.put('/:id', (req, res) => {
    // do your magic!
});

// custom middleware

function validatePostId(req, res, next) {
    // do your magic!
}

module.exports = router;
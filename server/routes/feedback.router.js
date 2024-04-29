const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    console.log(req.body);
    const request = req.body;
    const sqlText = `
    INSERT INTO "feedback"("feeling", "understanding", "support", "comments")
    VALUES ($1,$2,$3,$4);`;
    pool
        .query(sqlText, [request.feeling, request.understanding, request.support, request.comments] )
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
})  


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req,res) => {
    const sqlText = `
        DELETE FROM "feedback"
        WHERE "id" = $1;
    `
    pool
        .query(sqlText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        })
})

module.exports = router;

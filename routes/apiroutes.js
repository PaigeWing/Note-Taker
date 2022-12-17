const router = require('express').Router();
const db = require('../db/db.json');
const path = require('path');
const fs = require('fs');

router.get('/notes', (req, res) => {
    return res.json(db)
})

router.post('/notes', (req, res) => {
    const notes = db;
    const newNote = req.body;
    notes.push(newNote);
    console.log(notes);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    return res.json(notes)
})

module.exports= router;
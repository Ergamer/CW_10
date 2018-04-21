const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');

const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

const createRouter = (db) => {
    router.get('/', (req, res) => {
        db.query('SELECT `id`, `title`, `content`, `image`, `date`  FROM news', function (error, results) {
            if (error) throw error;

            res.send(results);
        });
    });

    router.post('/', upload.single('image'), (req, res) => {
        const newNews = req.body;

        if (req.file) {
            newNews.image = req.file.filename;
        } else {
            newNews.image = null;
        }

        db.query(
            'INSERT INTO news (`title`, `content`, `image`) ' +
             +
            'VALUES (?, ?, ?)',
            [newNews.title, 1, newNews.content, newNews.image],
            (error, results) => {
                if (error) throw error;

                newNews.id = results.insertId;
                res.send(item);
            }
        );
    });

    router.get('/:id', (req, res) => {
        db.query('SELECT * FROM news WHERE id='+ req.params.id, function (error, results) {
            if(error) throw error;
        });
        res.send(db.getDataById(req.params.id));
    });

    return router;
};

module.exports = createRouter;
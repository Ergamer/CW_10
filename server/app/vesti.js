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
        db.query('SELECT `id`, `title` FROM Subject matter', function (error, results) {
            if (error) throw error;

            res.send(results);
        });
    });

    router.post('/', upload.single('image'), (req, res) => {
        const item = req.body;

        if (req.file) {
            item.image = req.file.filename;
        } else {
            item.image = null;
        }

        db.query(
            'INSERT INTO Subject matter (title, location_id, description, image, category_id, `date' +
            ' registration`) ' +
            'VALUES (?, ?, ?, ?, ?, ?)',
            [item.title, 1, item.description, item.image, 1, 1212],
            (error, results) => {
                if (error) throw error;

                item.id = results.insertId;
                res.send(item);
            }
        );
    });

    router.get('/:id', (req, res) => {
        res.send(db.getDataById(req.params.id));
    });

    return router;
};

module.exports = createRouter;
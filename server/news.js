const express = require('express');

const router = express.Router();

const createRouter = (db) => {
    router.get('/', (req, res) => {
        db.query('SELECT * FROM news', function (error, results) {
            if (error) throw error;

            res.send(results);
        });
    });

    router.post('/', (req, res) => {
        const news = req.body;

        db.query(
            'INSERT INTO categories (title, content, image, date_publication) ' +
            'VALUES (?, ?, ?, ?)',
            [news.title, news.content, news.image, news.date_piblication],
            (error, results) => {
                if (error) throw error;

                news.id = results.insertId;
                res.send(news);
            }
        );
    });

    router.get('/:id', (req, res) => {
        res.send(db.getDataById(req.params.id));
    });

    return router;
};

module.exports = createRouter;
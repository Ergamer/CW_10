const express = require('express');
const mysql = require('mysql');

const news = require('./app/news');
const comments = require('./app/comments');
const app = express();

const port = 8000;

app.use(express.json());
app.use(express.static('public/uploads'));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '198721',
    database: 'cw_10'
});

connection.connect((err) => {
    if (err) throw err;

    app.use('/news', news(connection));
    app.use('/comments', comments(connection));


    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
});
const express = require('express');
const cors = require('cors');
const responseTime = require('response-time');
const errorHandler = require('../middleware/error_handler');
const logger = require('../middleware/logger');

const pre = ({ app }) => {
    app.use(logger);
    app.use(cors());
    app.use(responseTime());
    app.use(express.json());
};

const post = ({ app }) => {
    app.get('/sys/health', (req, res) => {
        res.send('OK');
    });
    app.use(errorHandler());
};

module.exports = {
    pre,
    post,
};
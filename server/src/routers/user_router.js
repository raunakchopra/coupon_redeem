const express = require('express');

const router = express.Router();

module.exports = (userController) => {
    router.post('/signup', userController.signup.bind(userController));

    return router;
};
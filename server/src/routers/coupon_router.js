const express = require('express');

const router = express.Router();

module.exports = (couponController, auth) => {
    router.get('', couponController.findAll.bind(couponController));

    router.post('/redeem/:id', auth, couponController.redeem.bind(couponController));
    router.post('', couponController.createMany.bind(couponController));
    return router;
};
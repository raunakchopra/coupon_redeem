const mongoose = require('mongoose');

class Coupon {
    constructor() {
        const CouponSchema = new mongoose.Schema({
            company: {
                type: String,
                required: true
            },
            couponCode: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            totalQuota: {
                type: Number,
                required: true
            },
            currentQuota: {
                type: Number,
                required: true
            },
            start: {
                type: Date,
                required: true
            },
            end: {
                type: Date,
                required: true
            },
        }, { timestamps: true });

        this.model = mongoose.model('Coupons', CouponSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = Coupon;
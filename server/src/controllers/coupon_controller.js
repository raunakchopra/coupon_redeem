const { query } = require("express");

class CouponController {
    constructor({ coupon }) {
        this.couponService = coupon;
    }

    async findAll(req, res, next) {
        let coupons;
        try {
            coupons = await this.couponService.findMany({})
        }
        catch (e) {
            return next(e)
        }
        res.json({
            coupons
        })
    }

    async createMany(req, res, next) {
        let list = req.body;
        let coupons;

        try {
            coupons = await this.couponService.createMany({ list });
        }
        catch (e) {
            return next(e);
        }
        res.json({
            coupons
        })
    }

    async redeem(req, res, next) {
        console.log(res.locals.user)
        let couponId = req.params.id;

        let updateCoupon;

        try {
            let coupon = await this.couponService.findOne({
                query: {
                    _id: couponId
                }
            })

            // if redemption is possible -> check quota, and end time
            let redeem = true
            const currentTime = new Date();
            if (coupon.currentQuota >= coupon.totalQuota) {
                redeem = false
            }
            if (currentTime > coupon.end) {
                redeem = false;
            }

            // Redeeming
            if (redeem) {
                updateCoupon = await this.couponService.updateOne({
                    query: { _id: coupon._id },
                    body: { currentQuota: coupon.currentQuota + 1 }
                })
            }
        }
        catch (e) {
            return next(e)
        }

        res.json({
            updateCoupon
        })
    }

}

module.exports = CouponController;
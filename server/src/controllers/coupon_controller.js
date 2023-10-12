const { query } = require("express");

class CouponController {
    constructor({ coupon, user }) {
        this.couponService = coupon;
        this.userService = user;
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
        let userId = res.locals.user._id
        let couponId = req.params.id;
        let message;
        let updateCoupon, updateUser;

        try {
            let user = await this.userService.findOne({
                query: {
                    _id: userId
                }
            })
            let coupon = await this.couponService.findOne({
                query: {
                    _id: couponId
                }
            })

            // if redemption is possible -> check quota, and end time, check user coupons
            let redeem = true
            const currentTime = new Date();
            if (user.coupons.includes(coupon._id.toString())) {
                redeem = false
                message = "Already Redeemed"
            }

            else if (coupon.currentQuota >= coupon.totalQuota) {
                redeem = false
                message = "No More Quota"
            }
            else if (currentTime > coupon.end) {
                redeem = false;
                message = "Coupon Expired"
            }

            // Redeeming
            if (redeem) {
                updateCoupon = await this.couponService.updateOne({
                    query: { _id: coupon._id },
                    body: { currentQuota: coupon.currentQuota + 1 }
                })
                let prevCoupons = [...user.coupons]
                prevCoupons.push(updateCoupon._id)
                updateUser = await this.userService.updateOne({
                    query: { _id: user._id },
                    body: { coupons: prevCoupons }
                }
                )
                res.json({
                    message: "Redeem Successful",
                    updateCoupon, updateUser
                })
            }
            else {
                res.json({
                    message
                })
            }
        }
        catch (e) {
            return next(e)
        }
    }

}

module.exports = CouponController;
const Models = require('../models/index');
const UserService = require('./user_service');
const AccessService = require('./access_service')
const CouponService = require('./coupon_service')

class Services {
    constructor() {
        this.models = new Models();
        this.userService = new UserService({
            user: this.models.userModel,
            access: this.models.accessModel,
        });
        this.accessService = new AccessService({
            access: this.models.accessModel,
        });
        this.couponService = new CouponService({
            access: this.models.accessModel,
            coupon: this.models.couponModel
        })
    }
}


module.exports = Services;
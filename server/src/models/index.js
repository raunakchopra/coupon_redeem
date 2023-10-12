const UserModel = require('./user')
const AccessModel = require('./access')
const CouponModel = require('./coupon')

class Models {
    constructor() {
        this.userModel = new UserModel().getModel();
        this.accessModel = new AccessModel().getModel();
        this.couponModel = new CouponModel().getModel();
    }
}

module.exports = Models;


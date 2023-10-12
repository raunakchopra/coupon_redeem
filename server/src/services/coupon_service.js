const bcrypt = require('bcrypt');
const error = require('../util/error');
const Base = require('./base_service');

class CouponService extends Base {
    constructor({ access, coupon }) {
        super(coupon);
        this.accessModel = access;
    }

}

module.exports = CouponService;
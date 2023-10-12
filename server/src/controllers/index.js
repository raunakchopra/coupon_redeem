const AccessController = require('./access_controller');
const UserController = require('./user_controller');
const CouponController = require('./coupon_controller');

class Controllers {
    constructor(services) {
        this.userController = new UserController({
            user: services.userService,
        });
        this.accessController = new AccessController({
            user: services.userService,
            access: services.accessService,
        });
        this.couponController = new CouponController({
            coupon: services.couponService,
            user: services.userService,
        })

    }
}


module.exports = Controllers;
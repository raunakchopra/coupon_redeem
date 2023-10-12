const userRouter = require('./user_router');
const accessRouter = require('./access_router');
const couponRouter = require('./coupon_router')

class Routers {
    constructor(controllers, auth) {
        this.couponRouter = couponRouter(controllers.couponController, auth);
        this.userRouter = userRouter(controllers.userController);
        this.accessRouter = accessRouter(controllers.accessController, auth);
    }
}

module.exports = Routers;
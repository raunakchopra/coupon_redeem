const express = require('express')

// loaders
const expressLoader = require('./loaders/express');
require('./loaders/mongoose');

// controllers
const Services = require('./services/index');

// middlewares
const userAuth = require('./middleware/auth');

// controllers
const Controllers = require('./controllers/index');

// routes
const Routers = require('./routers/index');

module.exports = () => {
    const services = new Services();
    const controllers = new Controllers(services);
    const routers = new Routers(
        controllers,
        userAuth({
            accessService: services.accessService
        })
    );

    const app = express();

    expressLoader.pre({ app });

    // routers here
    app.use('/user', routers.userRouter);
    app.use('/access', routers.accessRouter);
    app.use('/coupon', routers.couponRouter)

    expressLoader.post({ app });

    return {
        app,
    };
};
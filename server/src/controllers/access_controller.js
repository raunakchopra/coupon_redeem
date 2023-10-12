const { validationResult } = require('express-validator');

class AccessController {
    constructor({ user, access }) {
        this.userService = user;
        this.accessService = access;
    }

    async login(req, res, next) {
        let user;
        let token;
        const { hkid, password } = req.body
        try {
            user = await this.userService.login({
                query: {
                    hkid
                },
                password
            });
        } catch (e) {
            return next(e);
        }
        try {
            token = await this.accessService.createToken({
                userId: user._id,
                user,
            });
        } catch (e) {
            return next(e);
        }
        return res.json({ user, token });
    }
}

module.exports = AccessController;
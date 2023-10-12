const mongoose = require('mongoose');

class User {
    constructor() {
        const UserSchema = new mongoose.Schema({
            hkid: {
                type: String,
                unique: true,
            },
            password: {
                type: String,
                require: true
            },
            coupons: [
                {
                    type: mongoose.Schema.Types.ObjectId, ref: 'Coupons'
                }
            ]
        }, { timestamps: true });

        this.model = mongoose.model('Users', UserSchema);
    }

    getModel() {
        return this.model;
    }
}

module.exports = User;
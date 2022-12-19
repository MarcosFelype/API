const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:  true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        //select: false,
    },
    age: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    office:{
        type: String,
        required: false
    },
    preferenceArea:{
        type: String,
        required: false
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.virtual("url").get(function () {
    return `/user/${this._id}`;
});

/*UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})*/

const User = mongoose.model('user', UserSchema, 'user');

module.exports = User;

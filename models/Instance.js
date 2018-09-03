const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TimestampsPlugin = require('mongoose-timestamps');

const InstanceSchema = Schema({
    uid: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    port: {
        type: Number,
        required: true
    },
    realm: {
        type: String,
        required: true
    },
    access_token: {
        type: String,
        required: true
    },
    timeout: {
        type: Number,
        require: true,
        default: 3000
    },
    secure: {
        type: Boolean,
        required: true,
        default: false
    },
    __v: {
        type: Number,
        select: false
    }
});

InstanceSchema.index({ address: 1, port: 1 }, { unique: true });
InstanceSchema.plugin(TimestampsPlugin);

InstanceSchema.virtual('uri').get(function () {
    return `${this.address}${this.port !== 80 ? `:${this.port}` : ''}`;
});

module.exports = mongoose.model('Instance', InstanceSchema);

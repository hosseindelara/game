const mongoose = require("mongoose");
const {
    schema
} = require("./validation");


const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 60,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1000,
    },
    guideline: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 5000,
    },
    numberuser: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 100,
    },
    createDate: {
        type: Number,
        required: true,
        // default: Date.now(),
    },
    userIdCreator: {
        type: String,
        required: true
    },
    userIdApprover: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true,
        maxlength: 1,
    },
    img: {
        data: Buffer,
        contentType: String
    }
})

gameSchema.statics.gameValidation = function (body) {
    return schema.validateAsync(body);
};

module.exports = mongoose.model("Game", gameSchema);
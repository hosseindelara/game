const mongoose = require("mongoose");
const {
    schema
} = require("./validation");


const citySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50,
    },
    enName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
    },
    stateID: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 10,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 1000,
    },
    status: {
        type: Number,
        required: true,
        maxlength: 1,
    },
    userIdCreator: {
        type: String,
        required: true
    },
    userIdApprover: {
        type: String,
        required: true
    },

})

citySchema.statics.cityValidation = function (body) {
    return schema.validateAsync(body);
};

module.exports = mongoose.model("City", citySchema);
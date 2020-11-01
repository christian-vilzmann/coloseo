const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guidelineSchema = new Schema({
    number: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    domain: { type: String, required: true },
    template: { type: String, required: true },
}, {
    timestamps: true,
});

const Guideline = mongoose.model('Guideline', guidelineSchema);

module.exports = Guideline;
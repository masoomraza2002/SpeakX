const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  text: { type: String },
  showInOption: { type: Boolean },
  isAnswer: { type: Boolean },
});

const optionSchema = new mongoose.Schema({
  text: { type: String },
  isCorrectAnswer: { type: Boolean },
});

const dataSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    anagramType: { type: String },
    blocks: [blockSchema],
    options: [optionSchema],
    siblingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
    solution: { type: String },
    title: { type: String, required: true },
  },
  { versionKey: false }
);

const dataModel = mongoose.model('Data', dataSchema);

module.exports = { dataModel };

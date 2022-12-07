const { Schema, model } = require('mongoose');

const therapySchema = new Schema({
  therapist: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  duration: {
    type: Number,
    enum: [30, 45, 60],
    required: true,
  },
  amount: {
    type: Number,
  },
  times: {
    type: Number,
  },
  notes: {
    type: [String],
  },
});

module.exports = model('Therapy', therapySchema);

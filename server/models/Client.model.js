const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
  {
    clientNr: {
      type: Number,
    },
    firstName: {
      type: String,
      required: [true, 'First name is required.'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },
    birthday: {
      type: Date,
    },
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
    },
    phone: {
      type: String,
    },
    disease: {
      type: String,
    },
    insurance: {
      type: String,
      enum: ['gesetzlich', 'privat'],
    },
    prescription: {
      amount: {
        type: Number,
      },
    },
    therapy: {
      type: Schema.Types.ObjectId,
      ref: 'Therapy',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Client', clientSchema);

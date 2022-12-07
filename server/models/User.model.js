const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required.'],
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
    userpic: String,
    userpicPath: {
      type: String,
      default: 'https://picsum.photos/200/200?grayscale',
    },
    userpicPublicId: String,
    phone: String,
    address: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
    },
    medicalProfile: {
      type: String,
      enum: ['Physio', 'Ergo', 'Masseur'],
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model('User', userSchema);

module.exports = User;

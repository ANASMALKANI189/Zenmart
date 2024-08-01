const mongoose=require('mongoose');

const { Schema } = mongoose;

// Define the AccSchema Schema
const AccSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure email addresses are unique
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create the Account model
const account = mongoose.model('account', AccSchema);

module.exports=account;

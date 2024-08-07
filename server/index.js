
// import SignupForm from '../src/components/Signup';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv=require("dotenv");
const account = require('./models/account');
const Login=require('./models/Login');
// const Login = require('./models/Login');
dotenv.config()
const MONGO_URL=process.env.MONGO_URL
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL)
.then(() => console.log('Connected to Database'))
.catch((error) => console.log('Error Connecting to Database: ', error));

app.get('/', async (req, res) => {
  res.send("Server is Running")})

app.post('/signup', async (req, res) => {
  const getname=req.body.name
  const getemail=req.body.email
  const getpassword=req.body.password
  const signup=new account({
    name:getname,
    email:getemail,
    password:getpassword,
  })
  try {
    console.log(getname,getpassword,getemail)
    await signup.save();
    res.send("Registered Successfully");
} catch (error) {
    console.log("Error: ", error);
}
})
app.post('/login',async (req, res) => {
  // const getemail=req.body.email
  // const getpassword=req.body.password
  // const user=await Login.findOne({email:getemail, password:getpassword})
  // console.log(user)
  // if(!user) return res.status(400).send('Invalid email or password')
  // res.send('Logged In Successfully')

  const getemail = req.body.email
  const getpassword = req.body.password
  const Log = new Login({
    email:getemail,
    password:getpassword
  })
  try {
    console.log(getpassword,getemail)
    await Log.save();
    res.send("Registered Successfully");
} catch (error) {
    console.log("Error: ", error);
}
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

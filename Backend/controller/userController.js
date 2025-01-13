import userModel from "./../models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, massage: "User doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, massage: "User login successfully", token });
    } else {
      res.json({ success: false, massage: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: error.massage });
  }
};

// route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // checking user already exists or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, massage: "User already exists" });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, massage: "Invalid email format" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        massage: "please enter the strong password",
      });
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashPassword,
    });
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({ success: true, massage: "User created successfully", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: error.massage });
  }
};

// route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, massage: "Admin login successfully", token });
    } else {
      res.json({ success: false, massage: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, massage: error.massage });
  }
};

export { loginUser, registerUser, adminLogin };

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ==========================
// Register User
// ==========================
const registerUser = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      age,
      gender,
      height,
      weight,
      goal,
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create User
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      age,
      gender,
      height,
      weight,
      goal,
    });

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Login User
// ==========================
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

console.log("=================================");
console.log("Email Received:", email);
console.log("Password Received:", password);

const user = await User.findOne({ email });

console.log("User Found:", user);

if (user) {
  console.log("Stored Password Hash:", user.password);
}

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Compare Password
   const isMatch = await bcrypt.compare(password, user.password);

console.log("Password Match:", isMatch);
console.log("=================================");
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ==========================
// Export
// ==========================
module.exports = {
  registerUser,
  loginUser,
}
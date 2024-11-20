import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password did not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username Already Exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //Profile photo
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    await User.create({
      fullName,
      username,
      password: hashedPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender,
    });
    return res.status(201).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect Username or Password", success: false });
    }
    const isPasswordMatched= await bcrypt.compare(password,user.password)
    if(!isPasswordMatched){
        return res
        .status(400)
        .json({ message: "Incorrect Username or Password", success: false });
    }
    
  } catch (error) {
    console.log(error);
  }
};

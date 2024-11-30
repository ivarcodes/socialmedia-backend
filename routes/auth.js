import express from "express";
import { user } from "../models/user.model.js";
import bcrypt from "bcrypt";

const router = express.Router();

//register route
router.post("/register", async (req, res) => {
  try {
    const { password, username, email } = req.body;
    const existingUser = await user.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Username or email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new user({ ...req.body, password: hashedPassword });
    const savedUser = await newUser.save();
    console.log(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//login route

// get user route

export default router;

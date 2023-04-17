const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const User = require("../models/User");

router.post("/", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found.");
    }
    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
    await user.save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Password Reset",
      html: `
        <p>You have requested a password reset for your account.</p>
        <p>Click <a href="http://localhost:8080/reset-password/${resetToken}">here</a> to reset your password.</p>
      `,
    };
    await transporter.sendMail(mailOptions);
    res.send("Password reset email sent.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

module.exports = router;
const { testTransporter } = require("../utilities/emailTrasnsporter");
const { otpGenerator } = require("../utilities/otpGenerator");
// const nodemailer = require("nodemailer");

async function userLogin(req, res, next) {
    try {
        const { email, subject } = req.body;

        console.log("email :>> ", email);

        if (!email || !subject) {
            return res.status(400).json({ message: "Email is required and subject" });
        }

        const otp = otpGenerator();

        console.log("otp :>> ", otp);

        const transporter = await testTransporter();
        const emailContent = `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; background-color: #f9f9f9;">
        <h2 style="color: #ff5722; text-align: center;">🍔 Food Express</h2>
        <p style="font-size: 16px; color: #333;">Hello there,</p>
        <p style="font-size: 16px; color: #333;">
            Use the OTP below to verify your email address and continue with your login/registration:
        </p>
        <div style="margin: 20px auto; text-align: center;">
            <span style="font-size: 32px; font-weight: bold; color: #000; letter-spacing: 5px; background: #fff; padding: 10px 20px; border-radius: 5px; border: 1px dashed #ff5722;">
            ${otp}
            </span>
        </div>
        <p style="font-size: 14px; color: #777;">
            This code is valid for 5 minutes. If you did not request this, please ignore this email.
        </p>
        <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">
            Thank you,<br>Team Food Express
        </p>
        </div>`;

        await transporter.sendMail({
            to: email,
            subject: "Food Express",
            html: emailContent,
        });

        res.send({ message: "OTP sent successfully" });
    } catch (err) {
        res.status(400).json({ Error: err });
        console.log("err :>> ", err);
    }
}

module.exports = {
    userLogin,
};

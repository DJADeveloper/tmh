require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5003;

// Middleware to parse JSON requests
app.use(express.json());

// Setup CORS
app.use(cors({ methods: ["POST"] }));

// Subscribe
app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Subscription",
    text: `
        New Subscriber Email: ${email}
        `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Subscription successful!" });
  } catch (error) {
    console.error("Error sending subscription email:", error);
    res.status(500).json({ success: false, message: "Subscription failed." });
  }
});

// Send Email
app.post("/api/send_email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        `,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

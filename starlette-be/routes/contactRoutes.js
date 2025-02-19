const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

// Route to Send Email (POST)
router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Email Transporter Configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML Email Template**
    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9;">
          <table role="presentation" style="width: 100%; max-width: 600px; margin: auto; background-color: #ffffff; border-spacing: 0; border: 1px solid #e0e0e0; padding: 20px; border-radius: 8px;">
            
            <!-- Header -->
            <tr>
              <td style="text-align: center; padding: 20px;">
                <h2 style="color: #333333; margin: 0;">📩 New Contact Form Submission</h2>
              </td>
            </tr>

            <!-- User Details -->
            <tr>
              <td style="padding: 15px;">
                <p style="font-size: 16px; color: #555555;">
                  <strong style="color: #333;">Name:</strong> ${firstName} ${lastName}
                </p>
                <p style="font-size: 16px; color: #555555;">
                  <strong style="color: #333;">Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a>
                </p>
                <p style="font-size: 16px; color: #555555;">
                  <strong style="color: #333;">Phone:</strong> <a href="tel:${phone}" style="color: #1a73e8; text-decoration: none;">${phone}</a>
                </p>
              </td>
            </tr>

            <!-- Message Section -->
            <tr>
              <td style="padding: 15px;">
                <p style="font-size: 16px; color: #555555; margin-bottom: 10px;">
                  <strong style="color: #333;">Message:</strong>
                </p>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-size: 15px; color: #333;">
                  ${message}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="text-align: center; padding: 20px; background-color: #333333; border-radius: 0 0 8px 8px;">
                <p style="color: #ffffff; font-size: 14px; margin: 0;">
                  Sent from your website's contact form.
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    // Email Options
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: "starlettevaluers8@gmail.com",
      subject: `New Contact Form: ${subject}`,
      html: htmlContent,
    };

    // Send Email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;

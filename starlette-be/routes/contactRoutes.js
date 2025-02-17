const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

// 📌 Route to Send Email (POST)
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Email Transporter Configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS,  // Your email app password
      },
    });

    // HTML Email Design
    const htmlContent = `
      <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f9;">
          <table role="presentation" style="width: 100%; background-color: #ffffff; border-spacing: 0; border: 1px solid #e0e0e0; padding: 20px;">
            <tr>
              <td style="text-align: center; padding: 20px;">
                <h1 style="color: #333333; font-size: 28px; margin: 0;">New Contact Form Submission</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <p style="font-size: 16px; color: #555555; line-height: 1.6;">
                  <strong style="color: #333333;">Name:</strong> ${name}
                </p>
                <p style="font-size: 16px; color: #555555; line-height: 1.6;">
                  <strong style="color: #333333;">Email:</strong> ${email}
                </p>
                <p style="font-size: 16px; color: #555555; line-height: 1.6;">
                  <strong style="color: #333333;">Message:</strong><br>
                  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
                    ${message}
                  </div>
                </p>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 20px; background-color: #333333;">
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
      from: email,  // The client's email address
      to: 'starlettevaluers8@gmail.com',  // Your email address
      subject: 'New Contact Form Submission',
      html: htmlContent,  // HTML content for the email
    };

    // Send Email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

module.exports = router;

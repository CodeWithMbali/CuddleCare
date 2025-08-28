const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configure your email transport (use your SMTP credentials)
const transporter = nodemailer.createTransport({
  host: 'smtp.yourprovider.com', // e.g. smtp.gmail.com or your actual SMTP host
  port: 465, // or 587 for TLS
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'info@cuddlecare.clinic', // clinic email
    pass: 'YOUR_EMAIL_PASSWORD' // replace with your actual password or app password
  }
});

app.post('/api/book', async (req, res) => {
  const { name, email, phone, service, date, message } = req.body;
  try {
    await transporter.sendMail({
      from: 'info@cuddlecare.clinic', // sender address
      to: 'info@cuddlecare.clinic', // clinic email
      subject: 'New Booking Request',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nMessage: ${message}`
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

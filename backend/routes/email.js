const express = require('express');
const nodemailer = require('nodemailer');
const config = require('../config/config');
const router = express.Router();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.creds.email.sender,
        pass: config.creds.email.password
    }
});

const mailOptions = {
    from: config.creds.email.sender,
    to: '',
    subject: 'Testing Readwise For Twitter',
    html: '<p>Readwise For Twitter</p>'
};

router.get('/send_email', (req, res) => {
    transporter.sendMail(mailOptions, function (err, info) {
        if (!err) {
            res.send('Sent Successfully');
        } else {
            res.send('Error in sending Mail!');
            console.log(err);
        }
    });
});

module.exports = router;
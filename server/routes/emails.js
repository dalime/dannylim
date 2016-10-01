const express = require('express');
const router = express.Router();

const dotenv = require('dotenv');
dotenv.load();

const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);


module.exports = router;

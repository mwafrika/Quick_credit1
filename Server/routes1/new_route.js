/* eslint-disable linebreak-style */
// import express from 'express';
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.end('mwafrika');
});

module.exports = router;

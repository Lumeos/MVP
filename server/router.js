const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

require('dotenv').load();

router.use(bodyParser.json());

router.get('*', (req, res)=>{
  //do stuff
  res.sendFile(path.join(__dirname,'..', 'client','dist','/index.html'));
});

router.post('/api/v1/jwt', async (req, res)=>{
  res.send(jwt.sign(req.body, process.env.SAASQUATCH_API_KEY));
})


module.exports = router;


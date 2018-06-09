const express = require('express');
const router = express.Router();
const path = require('path');
const axios = require('axios');

require('dotenv').load();

router.get('*', (req, res)=>{
  //do stuff
  res.sendFile(path.join(__dirname,'..', 'client','dist','/index.html'));
});


module.exports = router;


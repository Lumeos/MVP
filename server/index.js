const express = require('express');
const app = express();
const router = require('./router.js');
const favicon = require('serve-favicon');
const path = require('path');
const morgan = require('morgan');

app.use(morgan('dev'));

app.use(favicon(path.join('./client/dist/static','images','favicon.png')));
app.use(express.static('./client/dist'));

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Listening on PORT ${PORT}!`));

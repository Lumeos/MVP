const express = require('express');
const app = express();
const router = require('./router.js');
const favicon = require('serve-favicon');
const path = require('path');
const morgan = require('morgan');

const https = require('https');
const fs = require('fs');

app.use(morgan('dev'));

app.use(favicon(path.join('./client/dist/static','images','favicon.png')));
app.use(express.static('./client/dist'));

app.use(router);

const PORT_HTTP = process.env.PORT || 3000;
const PORT_HTTPS = process.env.PORT || 4000;

app.listen(PORT_HTTP, ()=>console.log(`HTTP Listening on PORT ${PORT_HTTP}!`));


//handle SSH temporarily on test environment for lack of certs
if (process.env.NODE_ENV === 'test'){

  const httpsOptions = {
    key: fs.readFileSync(process.env.SSL_KEY, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERT , 'utf8'),
    requestCert: false,
    rejectUnauthorized: false
  }

  https.createServer(httpsOptions, app).listen(PORT_HTTPS, () => {console.log(`HTTPS Listening on PORT ${PORT_HTTPS}!`)});

}

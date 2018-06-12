const express = require('express');
const util = require('util');
const app = express();

app.use(express.json());
app.set('port', process.env.PORT || 5000);

app.all('*', (req, res) => {
    res.send({echoService: 1, method: req.method, ip: req.ip, path: req.path, originalUrl: req.originalUrl, body: req.body, query: req.query});
});
app.listen(app.get('port'), () => {
    console.log('request echo is listening on port', app.get('port'));
});
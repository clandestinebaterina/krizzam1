var express = require('express');
var path = require ('path');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, 'COEN3463-m1t18')))
app.listen (app.get('port'), function()
{
console.log('Express server is running on port 3000');
});

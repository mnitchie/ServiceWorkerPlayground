var express = require('express');
var path = require('path');
var app = express();

app.set('etag', false);

app.use(express.static(path.join(__dirname, 'docs'), {
    maxAge: 0,
    etag: false
}));

// Define the port to run on
app.set('port', 3000);

// Listen for requests
var server = app.listen(app.get('port'), function() {
  console.log('chug chug');
});

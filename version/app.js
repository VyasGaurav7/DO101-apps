const express = require('express');
app = express();

var response;

var response;

app.get('/vers', function (req, res) {
    response = 'This is version 3 of the app.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});

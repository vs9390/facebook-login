//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/facebook-app'));
app.use(bodyParser.json());

app.get('/webhook', function(req,res){
    console.log(JSON.stringify(req.query));
    var challenge = req.query['hub.challenge'],
      verify_token = req.query['hub.verify_token'];
    if (verify_token === 'persquarefeet') {
      res.send(challenge);
    }
});

app.post('/webhook', function(req, res) {
    // Lead Info 
    console.log(req.body);
    res.send("Success");
});

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/facebook-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
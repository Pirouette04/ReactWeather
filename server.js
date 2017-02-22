var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
if(req.headers['x-fowarded-proto'] == "http"){
  next();
} else {
  res.redirect('https://' + req.hostname + req.url);
}
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log("Server On port " + PORT);
})

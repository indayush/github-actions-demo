var os = require('os');

exports.home=function(req,res){
  res.render('home');

  var interfaces = os.networkInterfaces();
  var addresses = [];
  for (var k in interfaces) {
      for (var k2 in interfaces[k]) {
          var address = interfaces[k][k2];
          if (address.family === 'IPv4' && !address.internal) {
              addresses.push(address.address);
          }
      }
  }
  console.log(addresses);
}


exports.login=function(req,res){
    res.render('login');
}


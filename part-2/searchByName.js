 const clients = require('./clients.json');
 var name = "Xymenes Dewer";
 var returnstuff = clients.filter(function(item) {return item.rep_name == name; });
 console.log('Finding Clients With Name "' + name + '"' );
 console.log(returnstuff);
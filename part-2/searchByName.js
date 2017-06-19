 const clients = require('./clients.json');
 var returnstuff = clients.filter(function(item) {return item.rep_name == "Xymenes Dewer"; });
 console.log(returnstuff);
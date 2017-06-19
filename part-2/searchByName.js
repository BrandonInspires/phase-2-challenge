 const clients = require('./clients.json');
 var name = process.argv[2];
 var returnstuff = clients.filter(function(item) {return (item.rep_name == name) });
 console.log('Finding Clients With Name "' + name + '"' );
 returnstuff.forEach(function(element) {
      console.log("id:", element.id);
 }, this);
 


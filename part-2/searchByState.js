 const clients = require('./clients.json');
 var state = process.argv[2];
 var returnstuff = clients.filter(function(item) {return (item.state == state) });
 console.log('Finding Clients in State "' + state + '"' );
 returnstuff.forEach(function(element) {
      console.log("");
      console.log("id:", element.id);
      console.log("rep_name:", element.rep_name);
      console.log("company:", element.company);
      console.log("city:", element.city);
      console.log("state:", element.state);
      console.log("");
 }, this);
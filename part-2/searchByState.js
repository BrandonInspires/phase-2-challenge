 const clients = require('./clients.json');
 var state = process.argv[2];
<<<<<<< HEAD
 let returnedArray = []
 var returnedData = clients.filter(function (item) {
       return (item.state == state)
 });
 console.log('Finding Clients in State "' + state + '"');
 //  returnedData.forEach(function(element) {
 //       console.log("{[");
 //       console.log("id:", element.id);
 //       console.log("rep_name:", element.rep_name);
 //       console.log("company:", element.company);
 //       console.log("city:", element.city);
 //       console.log("state:", element.state);
 //       console.log("]},");
 //  }, this);
 returnedData.forEach(function (element) {
       returnedArray.push(element.id, element.rep_name)
 }, this);
 console.log(returnedArray)
=======
 var returnstuff = clients.filter(function(item) {return (item.state == state) });
 console.log('Finding Clients in State "' + state + '"' );
 returnstuff.forEach(function(element) {
      console.log("{[");
      console.log("id:", element.id);
      console.log("rep_name:", element.rep_name);
      console.log("company:", element.company);
      console.log("city:", element.city);
      console.log("state:", element.state);
      console.log("]}");
 }, this);
>>>>>>> 11253725e5309264d893375eb848214ad56b2ad8

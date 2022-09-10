const express = require('express');
const bodyParser = require('body-parser');
let items =["to study","to implement","to work on project"]; //creating arrray of items to store
const app = express();
app.set('view engine', 'ejs');
app.use( bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/', function(req, res) {
  let today = new Date();              // date format method usnig javascript
  let currentday = today.getDay();
  let options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  let day=today.toLocaleDateString("en-US",options);
  res.render('list', { KindOFDay: day ,newListItem:items});     //passing values again from server to html page
});


app.post('/',function(req,res){

   let item = req.body.ListItems; // getting input from web page to server
   items.push(item);              // pushing each single input into array items
   res.redirect('/');            // get code will run after this
});



app.listen(3000, function() {
  console.log("Server has started at port 3000");
})

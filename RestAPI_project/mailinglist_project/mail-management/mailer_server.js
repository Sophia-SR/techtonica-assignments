const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});



app.route('/lists', (req, res) => {
    const listsArray = Array.from(lists.keys());
    res.send(listsArray);
});



let list = [
    {
    "name": "staff",
    "members": [
        "talea@techtonica.org", "michelle@techtonica.org"
    ]
  }
]
const express = require('express');
const app = express();
const port = 5000;

app.set('port', (process.env.PORT || 5000 ));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
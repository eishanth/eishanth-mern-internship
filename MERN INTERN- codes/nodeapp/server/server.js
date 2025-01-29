const express = require('express');
const cors = require('cors'); // to handle cross-origin requests
const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(express.json());

let message = 'default msg from server';

app.get('/', (req, res) => {
  res.send('hello this is data from server');
});

//define ruotes to handle requests
app.get('/api/data', (req, res) => {
  res.json({ message: `Received: ${message}`});
});


app.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`);
});

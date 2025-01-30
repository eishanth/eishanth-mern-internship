//--------users collection-------------


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const UserModel = require('./models/Users');
// const port = 3001;

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('hello this is data from server');
// });

// mongoose.connect('mongodb://localhost:27017/CRUD'); 

// app.post('/createuser', (req, res) => {
//   UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.listen(port, () => {
//   console.log(`Server is running on port http://localhost:${port}`);
// });


//-----------emp collection-------------

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmpModel = require('./models/Employee');
const port = 3002;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/EMPDB');

app.post('/createemp', (req,res)=>{
  EmpModel.create(req.body)
  .then(emps=>res.json(emps))
  .catch(err=>res.json(err))
})

app.listen(port,()=>{
  console.log(`Server is running on port http://localhost:${port}`);
})
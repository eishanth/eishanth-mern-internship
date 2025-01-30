import './App.css';
import React from 'react';
import {BrowserRouter, Link, Route ,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User } from './User';
import { CreateUser } from './CreateUser';
import { UpdateUser } from './UpdateUser';
import { CreateEmp } from './CreateEmp';

function App() {
  return ( 
      <BrowserRouter>
      <div className="App">
            <div>
                <ul style={{display:'flex',justifyContent:'space-around'}}>
                    <Link to="/">User</Link>
                    <Link to="/createuser">CreateUser</Link>
                    <Link to="/updateuser">UpdateUser</Link>
                    <Link to="/createemp">CreateEmp</Link>
                </ul>
            </div>

        <Routes>
          <Route path='/' element={<User />}/>
          <Route path='/createuser' element={<CreateUser />}/>
          <Route path='/updateuser' element={<UpdateUser />}/>
          <Route path='/createemp'element={<CreateEmp />}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;

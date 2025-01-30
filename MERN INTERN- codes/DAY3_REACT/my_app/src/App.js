import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Home} from './DAY4/home';
// import Navbar from './DAY4/navbar';
// import About from './DAY4/about';
// import {Contact} from './DAY4/contact';

import Counter from './DAY4/counter';

function App() { // functional component
      {/* <div className='header-container'>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
        <a href='#home'>Home</a>
        <a href='#skills'>Skills</a>
      </div>
      <div className='header-content'>
        <p>Hello, I'm Eishanth Palanisamy, Ui/Ux Designer and Front-end Developer and Machine Learning Enthusiast.</p>
        <img src="2.jpeg" className='Portfolio-image' alt='my-image'></img>
      </div>
      <About propss={{name:'vivo', version:2021, price:25000}} /> */}


    // const persons=[
    //   {name :'Eishanth', age:22, place:'Chennai'},
    //   {name:'Vishnu', age:23, place:'Chennai'},
    //   {name:'Vishnu', age:24, place:'Chennai'},
    // ];

  //   return(
  //     <div>
  //       {persons.map((persons)=>(
  //         <Rough name={persons.name} age={persons.age} place={persons.place} />
  //       ))}
  //     </div>
  //   );
  // }
  return(
    
  //   <div>
  //     <Router>
  //     <Navbar />
  //     <Routes>
  //       <Route path="/" Component={Home} />
  //       <Route path="/about" Component={About} />
  //       <Route path="/contact" Component={Contact} />
  //     </Routes>
  //   </Router>
  //   </div>
  // )

  <div>
    <Counter />
  </div>

  )
}

export default App;

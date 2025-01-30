// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';
import './App.css';
import { Clock } from './clock';

// import { User } from './useContext/user';
// import {Container} from './useContext/container';
// export const themeContext=createContext();

// function App() {
//   const [theme,setTheme]=useState('red');
//   const [style,setStyle]=useState({
//     backgroundColor: 'red',
//   });

//   const toggletheme=()=>{
//     if(theme==='red'){
//       setTheme('blue');
//       setStyle({
//         backgroundColor: 'blue',
//       });
//     }
//     else{
//       setTheme('red');
//       setStyle({
//         backgroundColor: 'red',
//       });
//     }
//   }
//   return (
//     <themeContext.Provider value={{theme,style}}>
    
//     <div className="App">
//       <h1 style={style}>App Component</h1>

      
//         <h1>Current theme: {theme}</h1>
//       <button onClick={toggletheme}>change theme</button>
            
//       <Container />  
//     </div>
//     </themeContext.Provider>
//   );
// }


// function App() {
//   const [theme, setTheme] = useState('light');

//   const ThemeContext = createContext();

//   const ToggleButton = () =>{
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     if(newTheme === 'light'){
//       document.body.style.backgroundColor = 'white';
//     }
//     else{
//       document.body.style.backgroundColor = 'black';
//     }
//     console.log("the theme:",theme);
//     console.log("the new theme:",newTheme);
//   }

//   return (
//     <div className='App-Div'>
//       <h1>App Component</h1>
//       <button onClick={ToggleButton}>Click me</button>
//       <h1>{theme}</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;

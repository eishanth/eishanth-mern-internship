import './App.css';
import {Loggedin} from './loggedin'
import { Loggedout } from './loggedout';
function App() {
  var obj={
    num:100,
    name:"sachin",
  }
  const pwd = 'sachin@22'
  return (
    <div className="App">
      <form>
        <lable>Enter the password: <input id='pwd' type="text" /></lable>
      </form>
      <button onClick={()=>{
        if(pwd===document){
          return <Loggedin />
        }
        else{
          return <Loggedout />
        }
      }}>Submit</button>
      <h1>the value of object is: {obj.num}</h1>
    </div>

  );
}

export default App;

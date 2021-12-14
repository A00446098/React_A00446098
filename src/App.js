import './App.css';
import './components/d.css';
import Aboutme from './components/Aboutme';
import Mytown from './components/Mytown';
import {useState} from 'react';


function App() {
  const[m,setm]=useState(true)
  return (
    <div>
      <div align="center">
        <p>
          <button onClick={()=>setm(true)} >About me</button><button onClick={()=>setm(false)}>My Town</button>
          {m?<Aboutme/>:<Mytown/>}</p>
          </div>

    </div>
  );
}

export default App;

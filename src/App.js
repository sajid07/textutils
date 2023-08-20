import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light")
  const [textMode, setTextMode] = useState('')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert(
    {  msg:message,
      type:type}
    )
    setTimeout(()=>{
      setAlert(null)

    },1500);

  }
  
  const toggleMode=()=>{
    

      if(Mode==="secondary" || Mode==="yellow")
      {
        setMode("light");

        setTextMode('text-dark');
        document.body.style.backgroundColor="white"
        showAlert("light mode has been enabled","success")

      } 
    
          
  }
  const toggleModeDark=()=>{
    

    if(Mode==="light" || Mode==="yellow")
    {
      setMode("secondary");

      setTextMode('text-light');
      document.body.style.backgroundColor="gray"
      showAlert("dark  mode has been enabled","success")

    } 
  
        
}
  const toggleModeYellow=()=>
  {
    if(Mode!=="yellow")
      {
        setMode("yellow");
        setTextMode('text-danger');
        
        document.body.style.backgroundColor="yellow"
        showAlert("yellow mode has been enabled","success")

      } 
      else if(Mode==="yellow"  || Mode==="secondary"){
        setMode("light");

        setTextMode('text-dark');
        document.body.style.backgroundColor="white"
        showAlert("light mode has been enabled","success")

          }
  }

  return (
<>
<Router>
<Navbar title="TextUtils" mode={Mode} toggleModeDark={toggleModeDark} toggleModeYellow={toggleModeYellow} toggleMode={toggleMode} txtMode={textMode}/>
<Alert alert={alert}></Alert>

<div className='container'>
<Routes>
        <Route path="/about" element={<TextForm showAlert={ showAlert} heading="Enter the Text to Analyse Below" mode={Mode} txtMode={textMode}/>}
 
         />
      </Routes>
</div>
{/*<About txtMode={textMode} mode={Mode} ></About>
          {<TextForm showAlert={ showAlert} heading="Enter the Text to Analyse Below" mode={Mode} txtMode={textMode}/>}
*/}
</Router>

</>
 );
}

export default App;

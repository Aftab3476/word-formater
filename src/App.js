import React, { useState } from 'react'
import './App.css';
import Header from './Components/Header';
import TextArea from './Components/TextArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alert from './Components/Alert';

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  const toggleClick = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <BrowserRouter>
        <Header title="WordConverter" mode={mode} toggleClick={toggleClick} />
        <Alert alert={alert}/>
        <Routes>
          <Route path='/' element={ <TextArea mode={mode} showAlert={showAlert} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

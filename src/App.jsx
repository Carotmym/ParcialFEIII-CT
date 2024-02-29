import React, { useState } from 'react';
import './App.css'
import Card from "./Components/Card";
import form from './Components/form';



function App() {
   const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };


  return (
    <div className="App">
      <h1>Carga de Estudiantes</h1>
      <form onSubmit={e => e.preventDefault()}>
        Username: 
        <input type="text" name="username" id=""/>
        
        Password:
        <input type = "password" name='name' id = "password"/> 
      
        <button type = "submit" >submit</button>
        </form>
      <Card username={formData.username} password={formData.password}/>
    </div>
  );
}

export default App;

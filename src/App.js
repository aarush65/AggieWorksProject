import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import ProjectForm from './components/ProjectForm';


  

function App() {
  
  // Title is called Class Review, and I made a class called ProjectForm which App imports 
  return (
    <div className="App">
      <header className="App-header">
      <h1>Class Review</h1>
     <ProjectForm/> 
        
      </header>
    </div>
  );
}

export default App;

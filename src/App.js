import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
      </div>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar';
import Results from './components/layout/Results';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <Results/>
        </div>
      </div>
    )
  }
}

export default App;

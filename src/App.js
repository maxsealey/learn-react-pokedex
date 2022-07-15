import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar';
import Results from './components/layout/Results';
import Footer from './components/layout/Footer';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
          <Results/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;

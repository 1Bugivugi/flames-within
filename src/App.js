import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/Wrapper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


library.add(faTwitter, faLinkedin);


function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;

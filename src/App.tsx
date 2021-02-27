import React from 'react';
import './App.css';
import RouteConfig from './RouteConfig/Routes'
import Header from './components/header/header'

function App() {
  return (
    <div>
       <Header />
       <RouteConfig />
    </div>
  );
}

export default App;

import React from 'react';
import AppRoutes from './Routes/Routes'; 
import Header from './Components/Header/Header'; 
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

import './App.css'; 

function App() {
  return (
    <div className="app">
      <header className='page-header'>
        <Header />
      </header>
      <Navigation />
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

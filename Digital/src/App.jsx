import React from 'react';
import AppRoutes from './Routes/Routes'; 
import Header from './Components/Header/Header'; 
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';

import './App.css'; 

function App() {
  return (
    <div className="app">
      <header className='header'>
      <div className='page-header'>
        <Header/>
      </div>

      <div className='nav-header'>
      <Navigation />
      </div>
      
      </header>
      


      <div className="content">
        <AppRoutes />
      </div>

      <footer>
      <Footer />
      </footer>
     
    </div>
  );
}

export default App;

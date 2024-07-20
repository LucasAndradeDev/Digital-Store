import React from 'react';
import AppRoutes from './Routes/Routes'; 
import Navigation from './Components/Navigation/Navigation'; 
import Footer from './Components/Footer/Footer';
import './App.css'; // Importa o CSS global

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

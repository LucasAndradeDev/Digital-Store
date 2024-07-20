import React from 'react';
import AppRoutes from './Routes/Routes'; 
import Header from './Components/Header/Header'; // Corrigido o nome do componente
import Footer from './Components/Footer/Footer';
import Button from './Components/Button/Button';
import './App.css'; // Importa o CSS global

function App() {
  return (
    <div className="app">
      <div className='page-header'>
      <Header />
        <Button />
       
      </div>
     
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

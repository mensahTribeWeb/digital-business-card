import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Info from '../components/Info';
import Interest from '../components/Interests';

import './App.css';

export default function App() {
  return (
    <div className="container App">
      <About/>
      <Footer/>
      <Info/>
      <Interest/>
    </div>
  );
}
 


import React from 'react';
import './app.scss';
import Header from './components/Header/Header';
import Collections from './components/Collections/Collections';
import Cities from './components/Cities/Cities';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import AccContainer from './components/AccContainer/AccContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Collections />
      <Cities />
      <CTA />
      <AccContainer />
      <Footer />
      {/* New Feature: Order Tracking System */}
      <div className="order-tracking">
        <h3>Track Your Order</h3>
        <p>Real-time updates on your food delivery</p>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Info from './components/Info'
import Uses from './components/Uses'
import Contact from './components/Contact'
import Footer from './components/Footer'
import "./css/style.css"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Info />
    <Uses />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

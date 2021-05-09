import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header';
import Cards from './components/Cards';
import Gallery from './components/Gallery';
import About from './components/About';

import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Cards />
    <Gallery />
    <About />

    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

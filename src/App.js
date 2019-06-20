import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import LandingPage from './components/pages/LandingPage';
import ListingsPage from './components/pages/ListingsPage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import BlogPage from './components/pages/BlogPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />


        <Route path="/" exact component={LandingPage} />
        <Route path="/Listings/" component={ListingsPage} />
        <Route path="/About/" component={AboutPage} />
        <Route path="/Blog/" component={BlogPage} />
        <Route path="/Contact/" component={ContactPage} />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './scss/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/pages/LandingPage';
import ListingsPage from './components/pages/ListingsPage';
import AboutPage from './components/pages/AboutPage';
import BlogPage from './components/pages/BlogPage';
import AgentsPage from './components/pages/AgentsPage';
import ContactPage from './components/pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop>

          <Header />

          <Route path="/" exact component={LandingPage} />
          <Route path="/Listings/" component={ListingsPage} />
          <Route path="/About/" component={AboutPage} />
          <Route path="/Blog/" component={BlogPage} />
          <Route path="/Agents/" component={AgentsPage} />
          <Route path="/Contact/" component={ContactPage} />

          <Footer />
          
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

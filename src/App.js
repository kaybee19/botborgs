import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from './/styles/GlobalStyle'

// Comps
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Teams from './pages/Teams';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/team' component={Teams} />
      </Switch>
      <Footer />

    </BrowserRouter>
  );
}

export default App;

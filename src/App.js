import './App.css';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Home from './comps/pages/home/Home';
import Navbar from './comps/Navbar';
import React , {useEffect, useState} from 'react';
import Services from './comps/pages/services/Services';
import Products from './comps/pages/products/Products';
import ContactUs from './comps/pages/ContactUs/ContactUs';
import Who from './comps/pages/who/Who';
import Footer from './comps/Footer';
import Product from './comps/Product';


export const langContext = React.createContext();

function App() {
  //lang state
  const [isArabic,setIsArabic] = useState(true);
  //lang context
  const handleLang = ()=>{
      setIsArabic(!isArabic);
  };


  return (
    <langContext.Provider value={isArabic}>
      <div className="App">
        <Router>
        <div className="lang"><span onClick={handleLang}>{isArabic  ? "English" : "عربي"}</span></div>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/our-services" component={Services}/>
            <Route path="/our-products" exact component={Products}/>
            <Route path="/our-products/:id" component={Product}/>
            <Route path="/contact-us" component={ContactUs}/>
            <Route path="/who-are-we" component={Who}/>
          </Switch>
          <Footer/>
        </Router>
    </div>
    </langContext.Provider>
  );
}

export default App;

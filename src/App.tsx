import React, { createContext, useContext, useState } from 'react';
import TopForm from './Home/Top-Form/Top-form';
import * as Router from 'react-router-dom'
import Header from './Layout/header';
import Footer from './Layout/footer';
import Content from './Content';


function App() {
  
  
  return (
    <>
    <Router.BrowserRouter>
     
        <Content/>
      
     
    </Router.BrowserRouter>
    
    </>
  );
}

export default App;

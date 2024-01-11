import React from 'react';
import Header from './components/Header';
//import Dashboards from './components/Dashboards';
import Menu from './components/Menu';
import Footer from './components/Footer';
//import Courses from './components/Courses';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
function App(){
        return (
            <div class = "wrapper">
                <BrowserRouter>
                    <Header />
                    <Content />
                    <Menu />
                    <Footer />
                </BrowserRouter>
            </div>  
        );
    }
  
export default App
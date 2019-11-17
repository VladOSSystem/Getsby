import React from 'react';
import Header from './header'
import Footer from './footer'
const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div className="container mt-2">
            
              {props.children}
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;

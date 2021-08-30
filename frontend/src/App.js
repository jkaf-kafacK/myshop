import React from 'react'
import { BrowserRouter, Router} from 'react-router-dom';
import HomePage from './Page/HomePage.js';
import ProductPage from './Page/ProductPage.js';

function App() {
  const openMenu=() => {
    document.querySelector(".sidebar").classList.add("open")
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>

    <div className="grid-container">
        <header className="header">
           <div>
             <button onClick={openMenu}>
             <img src = "/images/menu.svg" alt="" width="20rem"/>
             </button>
            <a  className="brand" href="index.html">KFJS SHOP </a>
          </div>
          <div className="header-links">
            <a href="/cart">Cart</a>
            
            <a href="/signin"> Sign In</a>
         </div>
       </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>X</button>
          <ul>
              <li>
                  <a href="index.html">Pants</a>
              </li>
              <li>
                  <a href="index.html">Shirts</a>
              </li>
              <li>
                  <a href="index.html"> Electronic</a>
              </li>
          </ul>
        </aside>
        <main>
          <Router path="/product/:id" component = {ProductPage}></Router>
          <Router path="/" component={HomePage} exact></Router>
         
      </main>
      <footer className="footer">
          All right reseved.
    </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

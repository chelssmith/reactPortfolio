import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './Style.css';


import Nav from './components/Nav'
import Contact from './components/Contact';
import About from './components/About'
import Projects from './components/Projects'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;



{/* <div className="App">
        <div className="about">
          <h1 className="about-me">About Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus architecto quia quidem incidunt. Reiciendis quas architecto ipsa quam soluta officia quia? Eaque illo fugit aut culpa libero nesciunt beatae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur et illum quaerat a aliquam! Quasi, quaerat laboriosam. Debitis inventore necessitatibus voluptas praesentium mollitia natus, pariatur omnis, nam suscipit nisi laborum?</p>
        </div>
      </div>
    </div> */}
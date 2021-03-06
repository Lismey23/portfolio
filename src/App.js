import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import './style.css'


function App () {
return(
    
    <Router>
        <div>

            <NavBar/>
            <Route exact path='/' component={About}/>
            <Route exact path='/portfolio' component={Portfolio}/>
            
        </div>

    </Router>
    
)
}

export default App;
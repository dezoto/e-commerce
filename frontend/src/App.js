import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
    <div className='grid-container'>
        <header className='row'>
            <div>
                <a className='brand' href='/'>DoubleSix</a>
            </div>
            <div className='right-nav'>
                <div><a href='/cart'>Cart</a></div>
                <div className='signin'><a href='/signin'>Sign In</a></div>
            </div>
        </header>
        <main>
          <Route path='/product/:id' component={ProductScreen}></Route>
          <Route path='/' component={HomeScreen} exact></Route>  
        </main>
        <footer className='row center'>
            All right reserved
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;

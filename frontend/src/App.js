import React from 'react';
import Product from './components/Product';
import data from './data';

function App() {
  return (
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
            <div className="row center">
              {data.products.map((product) => (
                  <Product key={product._id} product={product}/>
                ))
              }
                
            </div>
        </main>
        <footer className='row center'>
            All right reserved
        </footer>
    </div>
  );
}

export default App;

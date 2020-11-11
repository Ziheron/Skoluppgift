import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import './App.css';

const App = () => (
  <Fragment>
    <Navbar />
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Pokemon Hunt</h1>
          <p className='lead'>Search you favorite Pokemon</p>
          <Landing />
        </div>
      </div>
    </section>
  </Fragment>
);

export default App;

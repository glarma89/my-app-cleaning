import React from 'react'
import Footer from './componentsDasha/footer';
import Header from './componentsDasha/header';
import Main from './componentsDasha/main';

function App() {

  return (
    <div className='container'>
      <Header />
      <Main />
      <Footer className='footer'/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import data from './data/Data';

function App() {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <main className='container'>
      <header>
        <h1>Menu</h1>
      </header>
      <section>
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;

import React from 'react';
import Menu from './components/Menu';
import BooksListPage from './Pages/BooksListPage.jsx';
import './App.css';

const App = () => {
  return (
    <div>
      <Menu />
      <BooksListPage />
    </div>
  );
};

export default App;
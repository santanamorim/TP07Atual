import React from 'react';
import Menu from './components/Menu';
import BooksListPage from './pages/BooksListPage';
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
import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList.jsx';

const BooksListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json')
      .then(response => response.json())
      .then(data => {
        setBooks(Object.values(data) || []);
      })
      .catch(error => {
        console.error('Erro ao buscar dados da API:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Livros</h1>
      <BookList books={books} />
    </div>
  );
};

export default BooksListPage;
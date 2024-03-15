import React from 'react';

const CardBook = ({ book }) => {
  return (
    <div className="card">
      <img src={book.cover} alt={book.title} className="book-cover" />
      <div className="book-details">
        <h2>{book.title}</h2>
        <p>Autor: {book.author}</p>
        <p>Categoria: {book.genre}</p>
        <p>Avaliação: {book.rating}/5</p>
      </div>
    </div>
  );
};

export default CardBook;
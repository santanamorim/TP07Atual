import React from 'react';
import CardBook from './CardBook.jsx';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books && books.length > 0 ? (
        books.map(book => (
          <CardBook key={book.id} book={book} />
        ))
      ) : (
        <p>Nenhum livro encontrado.</p>
      )}
    </div>
  );
};

export default BookList;
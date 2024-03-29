import React from 'react';

const ListBooks = ({ books, deleteBook, handleFinished }) => {
  return (
    <ol>
      {books && books.length > 0 ? (
        books.map((book) => {
          return (
            <div key={book._id}>
                <li>
                <p> Title : {book.title} <br/>  Author : {book.author} <br/> </p>
                <img src= {book.img} alt="Book cover"></img>
                <br/>
                <p>Description : {book.description}</p>
                <p className="checkbox-wrapper"> <input className={book.finished ? "checked" : ""} type="checkbox" checked={book.finished} onChange={() => handleFinished(book._id, !book.finished)}/> <span className="checkmark"></span>Complete </p>
                <button onClick={() => deleteBook(book._id)} > Delete Book</button> 
                </li>
            </div>   
          );
        })
      ) : (
        <li>No Books(s) left</li>
      )}
    </ol>
  );
};

export default ListBooks;
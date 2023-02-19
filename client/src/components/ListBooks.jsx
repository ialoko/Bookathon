import React from 'react';

const ListBooks = ({ books, deleteBook, handleFinished }) => {
  return (
    <ul>
      {books && books.length > 0 ? (
        books.map((book) => {
          return (
            <div>
                <li key={book._id}>
                <p> Title : {book.title} <br/>  Author : {book.author} <br/> </p>
                <img src= {book.img} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"></img>
                <br/>
                <p>Description : {book.description} <br/></p>
                <label><input type="checkbox" checked={!book.finished} onChange={handleFinished(book._id)} /> Completed</label>
                <br/><button onClick={() => deleteBook(book._id)} > Delete Book</button> 
                </li>
            </div>   
          );
        })
      ) : (
        <li>No Books(s) left</li>
      )}
    </ul>
  );
};

export default ListBooks;
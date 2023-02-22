import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListBooks from './ListBooks';

class Book extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios
      .get('/api/books')
      .then((res) => {
        if (res.data) {
          this.setState({
            books: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteBook = (id) => {
    axios
      .delete(`/api/books/${id}`)
      .then((res) => {
        if (res.data) {
          this.getBooks();
        }
      })
      .catch((err) => console.log(err));
  };

  handleFinished = (id, complete) => {
    axios
      .put(`/api/books/${id}/${complete}`)
      .then((res) => {
        if (res.data) {
            this.getBooks();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { books } = this.state;

    return (
      <div>
        <h1>My Books(s)</h1>
        <Input getBooks={this.getBooks} />
        <ListBooks books={books} deleteBook={this.deleteBook} handleFinished={this.handleFinished} />
      </div>
    );
  }
}

export default Book;
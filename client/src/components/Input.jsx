import React, { Component } from 'react';
import axios from 'axios';
//https://www.gutenberg.org/browse/scores/top#books-last30
//https://www.gutenberg.org/ebooks/64317
//https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg

class Input extends Component {
    state = {
        title: '',
        author: '',
        description: '',
        finished: false,
        img: '',
        ebookNo: '',
    };

    addBook = () => {
        const book = { 
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            finished: this.state.finished,
            img: this.state.img,
            ebookNo:this.state.ebookNo,
         };

        if (book.ebookNo && book.title.length > 0) {
            axios
                .post('/api/books', book)
                .then((res) => {
                    if (res.data) {
                        this.props.getTodos();
                        this.setState({
                            title: '',
                            author: '',
                            description: '',
                            finished: false,
                            img: '',
                            ebookNo: '',
                        });
                    }
                })
                .catch((err) => console.log(err));
        } else {
            console.log('input field required');
        }
    };

    handleChange = (e) => {
        this.setState({
            action: e.target.value,
        });
    };

    render() {
        let { action } = this.state;
        return ( < div >
            <
            input type = "text"
            onChange = { this.handleChange }
            value = { action }
            /> <
            button onClick = { this.addBook } > add book < /button> < /
            div >
        );
    }
}

export default Input;



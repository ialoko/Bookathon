import React, { Component } from 'react';
import axios from 'axios';
// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
                        this.props.getBooks();
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

    //grab ebook info from project gutenberg based on ebook number
    getBookInfo = () => {
        let author = "";
        let title = "";
        let subject = "";

        if(this.state.ebookNo > 0 && !isNaN(this.state.ebookNo)){ //user entered ebook number
            axios.get(`https://gutendex.com/books/?ids=${this.state.ebookNo}`).then(response => {
                var json = response.data
                console.log(response.data.count)
                title = json.results[0].title;
                author = json.results[0].authors[0].name;
                subject = json.results[0].subjects.toString()
                toast.success('Book info added!');
                this.addBookInfo(author,title,subject);
            }).catch(err => {
                console.log(err)
              });
        }else{
            toast.error('Error while getting book info!');
        }
    };

    addEbookNo = (e) => {
        this.setState({
            ebookNo: e.target.value,
        });
    };

    addBookInfo = (author, title, subject) =>{
        let imgString = `https://www.gutenberg.org/cache/epub/${this.state.ebookNo}/pg${this.state.ebookNo}.cover.medium.jpg`;
        this.setState({
            title: title,
            author: author,
            description: subject, 
            img: imgString,
        });
    };
    searchBooks = () => {
        window.open("https://www.gutenberg.org/browse/scores/top#books-last30");
    };


    render() {
        let { title, author, description, ebookNo, img } = this.state;
        return ( 
        <div>
            <ToastContainer position="top-right"/>
            <h1 onClick = { this.searchBooks } > Search for books on Project Gutenberg to add</h1> 
            <input type = "text" onChange = { this.addEbookNo } value = { ebookNo }/> 
            <button id = "buttoneBook" onClick = { this.getBookInfo } > Enter ebook number </button> 
            <h1>Is this the book you are looking for?</h1>
            <p> Title : {title} <br/>  Author : {author} <br/> Description : {description} <br/> </p>
            <img src= {img} onerror="this.onerror=null; this.remove()" alt = ""></img>
            <br/><button onClick = { this.addBook} > Add Book</button> 
        </div >
        );
    }
}

export default Input;



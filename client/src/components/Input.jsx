import React, { Component } from 'react';
import axios from 'axios';
const cheerio = require('cheerio'); 
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
//th - Author, td author name
    //grab ebook info from project gutenberg based on ebook number
    getBookInfo = () => {
        if(this.state.ebookNo > 0){ //user entered ebook number
            const author = "";
            const title = ""
            const subject = ""
            axios.get(`https://www.gutenberg.org/ebooks/${this.state.ebookNo}`).then(response => {
                if(response.status === 200){
                    const html = response.data;
                    const $ = cheerio.load(html);
                    $("#bibrec > div > table > tbody > tr").each((index, element) => {
                        if($(element).text().equals("Author")){
                            author = $(element).next.text()
                        }
                        else if($(element).text().equals("Title")){
                            title = $(element).next.text()
                        }
                        else if($(element).text().equals("Subject") && subject.equals("")){
                            subject = $(element).next.text()
                        }
                    });
                }
            }).catch(err => console.error(err))
        }
        this.addBookInfo(author,title,subject);
    };

    addEbookNo = (e) => {
        this.setState({
            ebookNo: e.target.value,
        });
    };

    addBookInfo = (author, title, subject){
        imgString = `https://www.gutenberg.org/cache/epub/${this.state.ebookNo}/pg${this.state.ebookNo}.cover.medium.jpg`
        this.setState({
            title: title,
            author: author,
            description: subject, 
            img: imgString,
        });
        alert("Book Information has been succesfully pulled");
    };
    searchBooks = () => {
        window.open("https://www.gutenberg.org/browse/scores/top#books-last30");
    };
//finish render method and then test
    render() {
        let { title, author, ebookNo, img } = this.state;
        return ( 
        <div>
            <h1 onClick = { this.searchBooks } > Search for books on Project Gutenberg to add</h1> 
            <input type = "text" onChange = { this.addEbookNo } value = { ebookNo }/> 
            <button onClick = { this.getBookInfo } > add ebook number </button> 

            <h1>Is this the book you are looking for?</h1>
            <p> Title : {title} <br/>  Author : {author} <br/> </p>
            <img src= {img} alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"></img>
            <button onClick = { this.addBook} > Add Book</button> 
        </div >
        );
    }
}

export default Input;



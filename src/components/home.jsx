import React , {Component} from "react";
import axios from "axios";

import Navbar from "./navbar";
import BookCard from "./showBook";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            book:[],
            noBook : false
        }
    }
    onClick = event => {
        window.location = '/addBook'
    }
    componentDidMount(){
        axios
        .get('http://localhost:4000/home')
        .then(res => {
            // console.log(res.data)
            this.setState({
                book:res.data
            })
        })
        .catch(err => {
            console.log("Error in Book Retrieval home page")
        })
    }
    render(){
        const books = this.state.book
        if(!books){
            this.setState({
                noBook : true
            })
        }
        let bookList = books.map((item,k) => (
            // console.log(item);
            <BookCard book={item} key={k} />
        ))

        return(
            <div>
                <Navbar />
                {bookList}
            </div>
            
            
        )
    }
}

export default Home;
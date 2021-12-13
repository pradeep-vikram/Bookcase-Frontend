import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

class Home extends Component{
    constructor(){
        super()
        this.state = {
            title:"",
            isbn:"",
            author:"",
            description:"",
            date:"",
            publisher:""
        }
    }

    onChange = event =>  {
        this.setState({[event.target.name]:event.target.value})
    }
    
    onSubmit = event => {
        event.preventDefault();
        var data = this.state;
        axios
            .post("http://localhost:4000/addBook",data)
            .then(res => {
                this.setState({
                    title:"",
                    isbn:"",
                    author:"",
                    description:"",
                    date:"",
                    publisher:"",
                    readtype:""
                })
                // console.log(res.data)
                if(res.data.msg === "Success"){
                    window.location = '/home'
                }
            })
            .catch(err => {
                console.log("Error in Add Book Post !")
            })


    }
    onFocus = event => {
        event.target.type='date'
    }
    onBlur = event => {
        event.target.type='text'
    }
    onChangeRadio = event => {
        this.setState({readtype:event.target.value})
    }


    render(){
        return(
            <div className="flex h-screen justify-center items-center">
                <div className="flex justify-center w-3/5 h-3/5 bg-blue-200 rounded-2xl">
                    <form className="my-auto w-4/5" onSubmit={this.onSubmit}>
                        <h1 className="flex justify-center font-KaushanScript text-4xl">Add a book</h1>
                        <input className="w-full mt-10 mb-4 focus:outline-none px-4 py-1 rounded-2xl text-lg" type="text" placeholder="Book Title" name="title" value={this.state.title} onChange={this.onChange} required/>
                        <input className="w-full mb-4 focus:outline-none px-4 py-1 rounded-2xl text-lg" type="text" placeholder="ISBN" name="isbn" value={this.state.isbn} onChange={this.onChange} required/>
                        <input className="w-full mb-4 focus:outline-none px-4 py-1 rounded-2xl text-lg" type="text" placeholder="Author" name="author" value={this.state.author} onChange={this.onChange} required/>
                        <input className="w-full mb-4 focus:outline-none px-4 py-1 rounded-2xl text-lg" type="text" placeholder="description" name="description" value={this.state.description} onChange={this.onChange}/>
                        <input className="w-full mb-4 focus:outline-none px-4 py-1 rounded-2xl text-lg" type="text" placeholder="Date" name="date" value={this.state.date} onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} required/>
                        <input className="w-full mb-4 focus:outline-none px-4 py-1 rounded-2xl text-lg" type="text" placeholder="Publisher" name="publisher" value={this.state.publisher} onChange={this.onChange} required/>
                        <div className="flex justify-between">
                            <div className="ml-1">  
                                <input className="mr-2" type="radio" id="readtype1" name="readtype" value="Currently Reading" checked onChange={this.onChangeRadio}/>
                                <label htmlFor="readtype1">Currently Reading</label>
                            </div>
                            <div>
                                <input className="mr-2" type="radio" id="readtype2" name="readtype" value="Finished Reading" onChange={this.onChangeRadio}/>
                                <label htmlFor="readtype2">Finished Reading</label>
                            </div>
                            <div className="mr-2">
                                <input className="mr-2 " type="radio" id="readtype3" name="readtype" value="Yet to Read" onChange={this.onChangeRadio}/>
                                <label htmlFor="readtype3">Yet to Read</label>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6 mb-3">
                            <button className="bg-white rounded-2xl py-2 pr-4 font-KaushanScript" type="submit"><FontAwesomeIcon icon={faPlus} size="1x" className="ml-3 mr-1 px-1 bg-blue-200 rounded-full"/>Add to case</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Home;


import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class Login extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            register:false
        }
    }

    onChange = event =>  {
        this.setState({[event.target.name]:event.target.value})
    }

    onSubmit = event => {
        event.preventDefault();

        const data = {
            email:this.state.email,
            password:this.state.password
        }
        // console.log(data)
        axios
            .post('http://localhost:4000/login',data)
            .then(res => {
                this.setState({
                    name:'',
                    email:'',
                    password:''
                })
                if(res.data.msg === "Success"){
                    window.location = '/home'
                }
                else if(res.data.msg === "Invalid Password"){
                    window.location = '/';
                }
                else{
                    window.location = '/';
                }
                // this.props.history.push('/');
            })
            .catch(err => {
                console.log("Error in login Post !")
            })
    }
    registeronSubmit = event => {
        event.preventDefault();

        const data = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password
        }
        axios
            .post('http://localhost:4000/register',data)
            .then(res => {
                this.setState({
                    name:'',
                    email:'',
                    password:''
                })
                if(res.data.msg === "Success"){
                    window.location = '/'
                }
                // else{
                //     window.location = '/';
                // }
                // this.props.history.push('/');
            })
            
            .catch(err => {
                console.log("Error in Register Post !")
            })
    }

    onClick = event => {
        event.preventDefault();
        this.setState({register:true})
    }

    render(){
        return(
            <div className="flex h-screen bg-gray-700 justify-center items-center">
                 { /* sm:flex-col md:h-2/5 md:flex-row */}
                {/* <div className="flex w-4/5 h-4/5 rounded-2xl bg-white items-center">
                    <div className="flex w-1/2 m-auto bg-yellow-100 justify-center h-full items-center rounded-l-2xl">
                        <form className="w-4/5 m-auto">
                            <h2 className="flex mb-3 justify-center font-KaushanScript text-4xl" >SIGN IN</h2>
                            <div className="flex justify-center mt-4">
                                <input className="pt-2 pb-2 pr-4 pl-4 w-4/5 rounded-2xl outline-none" type="email" placeholder="E-mail" name="email"></input>
                            </div>
                            <div className="flex justify-center mt-4">
                                <input className="pt-2 pb-2 pr-4 pl-4 w-4/5 rounded-2xl outline-none" type="password" placeholder="Password" name="password"></input>
                            </div>
                            <div className="flex justify-center">
                            <button className="mt-4 mb-4 bg-white pr-4 pl-4 rounded-2xl"><FontAwesomeIcon icon={faArrowRight} size="2x"/></button>
                            </div>
                        </form>
                    </div>
                    <div className="flex w-1/2 h-full items-stretch ">
                        <img className="rounded-r-2xl" src="https://cdn.dribbble.com/users/926537/screenshots/4502924/python-2.gif" alt="Developer-Gif"></img>
                    </div>
                </div> */}

                <div className="flex-col lg:flex md:flex-row w-4/5 h-4/5 bg-white rounded-t-2xl md:rounded-l-2xl">
                    <div className="flex h-2/5 lg:w-1/2 md:h-full items-stretch">
                        <img className="rounded-t-2xl w-full md:rounded-l-2xl" src="https://cdn.dribbble.com/users/926537/screenshots/4502924/python-2.gif" alt="Developer-Gif"></img>
                    </div>
                    <div className="flex h-3/5 md:flex md:h-full lg:w-1/2 justify-center items-center rounded-b-2xl bg-blue-50 md:rounded-r-2xl" style={{display: this.state.register ? 'none' : 'flex' }}>
                        <form className="md:w-1/2 md:align-center" onSubmit={this.onSubmit} >
                        <h2 className="flex justify-center mb-9 font-KaushanScript text-4xl">SIGN IN</h2>
                            <div className="flex justify-center mt-2">
                                <input className="pt-2 pb-2 pr-4 pl-4 w-full rounded-2xl outline-none" type="email" placeholder="E-mail" name="email" value={this.state.email} onChange={this.onChange} required></input>
                            </div>
                            <div className="flex justify-center mt-4">
                                <input className="pt-2 pb-2 pr-4 pl-4 w-full rounded-2xl outline-none" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required></input>
                            </div>
                            <div className="flex mt-6 justify-center w-1/2 m-auto self-center ">
                                <button className="md:px-5 font-KaushanScript py-2 px-2 bg-white rounded-2xl hover:bg-blue-500" type="submit" >Go <FontAwesomeIcon icon={faArrowRight} size="1x" className="pl-1"/></button>
                            </div>
                            <div className="flex mt-6 justify-center w-1/2 m-auto self-center ">
                                <button className="md:px-5 font-KaushanScript py-2 px-2 bg-blue-500 rounded-2xl" onClick={this.onClick} >Join For Free <FontAwesomeIcon icon={faArrowRight} size="1x" className="pl-1"/></button>
                            </div>
                        </form>
                    </div>

                    
                    <div className="flex h-3/5 md:flex md:h-full lg:w-1/2 justify-center items-center rounded-b-2xl bg-blue-50 md:rounded-r-2xl" style={{display: this.state.register ? 'flex' : 'none' }}>
                        <form className="md:w-1/2 md:align-center" onSubmit={this.registeronSubmit} >
                            <h2 className="flex justify-center mb-9 font-KaushanScript text-4xl">SIGN UP</h2>
                                <div className="flex justify-center mt-2">
                                    <input className="pt-2 pb-2 pr-4 pl-4 w-full rounded-2xl outline-none" type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onChange} required></input>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <input className="pt-2 pb-2 pr-4 pl-4 w-full rounded-2xl outline-none" type="email" placeholder="E-mail" name="email" value={this.state.email} onChange={this.onChange} required></input>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <input className="pt-2 pb-2 pr-4 pl-4 w-full rounded-2xl outline-none" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required></input>
                                </div>
                                <div className="flex mt-6 justify-center w-1/2 m-auto self-center ">
                                    <button className="md:px-5 font-KaushanScript py-2 px-2 bg-white rounded-2xl" type="submit" >Start Now <FontAwesomeIcon icon={faArrowRight} size="1x" className="pl-1"/></button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login; 
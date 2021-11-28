import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

class Login extends Component{
    render(){
        return(
            <div className="flex h-screen bg-gray-700 justify-center items-center">
                 { /* sm:flex-col md:h-2/5 md:flex-row */}
                <div className="flex w-4/5 h-4/5 rounded-2xl bg-white items-center">
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
                </div>
            </div>
        )
    }
}

export default Login; 
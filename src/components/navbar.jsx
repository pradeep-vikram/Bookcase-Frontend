import React , {Component} from "react";

class Navbar extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    onClick = event => {
        window.location = '/addBook'
    }
    onClickLogout = event => {
        window.location = '/'
    }

    render(){
        return(
            <div>
                <div className="bg-blue-300 w-full h-full">
                    <button onClick={this.onClick}>Add Book</button>
                    <button onClick={this.onClickLogout}>Log Out</button>
                </div>
            </div>
        )
    }

}

export default Navbar;
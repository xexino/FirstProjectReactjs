import React, { Component } from 'react'

export default class Wellcome extends Component {

    state = {
        name:"Mery"
    };
    
    render() {
        return (
            <>
           <h1>hello {this.state.name}</h1>
           
           <button
         onClick={this.setState.handleClick}>CLick me</button>
           
           </>
           )
    }
    handleClick =() => this.setState({
        name:"ayman"
    }) 

}

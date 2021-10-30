import React, { Component } from 'react'

export default class State extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"reddy"
        }
    }
    
    render() {
        setTimeout(()=>{
            this.setState({name:"mohan reddy"})
        },3000
        )
        return (
            <div>
              <h1>{this.state.name}</h1>  
            </div>
        )
    }
}

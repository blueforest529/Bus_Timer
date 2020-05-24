import React, { Component } from 'react';

class Showtime extends Component{
    
    constructor(props) {
        super(props)
        let date = new Date();
        this.state = {
            hour : date.getHours(),
            minutes : date.getMinutes(),
            showTime : ""
        } 
       
    }

     componentDidUpdate(){
        
        if(this.state.minutes > 45) {
                this.setState({       
                hour : this.state.hour + 1
                }) 
        }
        
        const showTime = this.props.busList.find(bus => (bus.time_hour >= this.state.hour && bus.time_min > this.state.minutes));
      
    }


    render(){ 
        
        return (
            <div>
            <h1>hello</h1>
           
            </div>
        ) 
    } 
} 

export default Showtime;

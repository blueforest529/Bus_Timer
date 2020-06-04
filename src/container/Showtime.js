import React, { Component } from 'react';

class Showtime extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            hour : "",
            minutes : ""
        } 

        let date = new Date();
        this.state = {
            hour : date.getHours(),
            minutes : date.getMinutes()
        }
        console.log(this.state);
    }

    componentWillUpdate(){
        if(this.state.minutes > 45) {
                this.setState({       
                hour : this.state.hour + 1
            }) 
        }
        var showTime;
        showTime = this.props.busList.find(bus => (bus.time_hour >= this.state.hour && bus.time_min > this.state.minutes));
        

        for( var key in showTime ) {
            console.log( key + '=>' + showTime[key] );
            
        }
    }
    

    render(){ 
        
        return (
            <div>
                <h1>
                    
                </h1>
            </div>
        ) 
    } 
} 

export default Showtime;

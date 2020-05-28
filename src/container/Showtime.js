import React, { Component } from 'react';

class Showtime extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            hour : "",
            minutes : ""
        } 
       
    }

    // componentWillUpdate (){
    //     let date = new Date();
    //     this.setState({
    //         hour : date.getHours(),
    //         minutes : date.getMinutes()
    //     })

    //     if(this.state.minutes > 45) {
    //             this.setState({       
    //             hour : this.state.hour + 1
    //         }) 
    //     }

    // }


   /* componentWillUpdate (){
        
        let date = new Date();
        this.setState({
            hour : date.getHours(),
            minutes : date.getMinutes()
        })


        if(this.state.minutes > 45) {
                this.setState({       
                hour : this.state.hour + 1
            }) 
        }
        
        const showTime = this.props.busList.find(bus => (bus.time_hour >= this.state.hour && bus.time_min > this.state.minutes));
        
        console.log(showTime);
    }
*/

    render(){ 
        let date = new Date();
        console.log(date);
        console.log(date.getHours());
        console.log(date.getMinutes());
        console.log(this.props.busList);
        const view = date[0];
        console.log(view);
        return (
            <div>
            <h1>{view}</h1>
            
            </div>
        ) 
    } 
} 

export default Showtime;

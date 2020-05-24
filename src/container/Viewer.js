import React, { Component } from 'react';
import BusList from "../component/BusList";

class Viewer extends Component{
    
    constructor(props) {
        super(props)
        let date = new Date();
        this.state = {
            hour : date.getHours(),
            minutes : date.getMinutes(),
            showTime : []
        } 
       
    }

    // componentDidUpdate(){
        
    //     if(this.state.minutes > 45) {
    //         this.setState({       
    //             hour : this.state.hour + 1
    //         }) 
    //     } 
    //     //this.props.busList.filter(bus => (    
    //     this.setState({
    //         showTime : this.props.busList.find(bus => (bus.time_hour >= this.state.hour && bus.time_min > this.state.minutes))
    //     })
    //     // console.log(this.state.showTime.time_hour);

    //     // console.log(this.state.showTime.time_min);
    // }


    render(){ 
        return (
            <div>
                <h1>Current Time</h1>
                {/* <h2>It's {this.state.date.toLocaleTimeString('it-IT')} </h2> */}
                <h2>
                    
                </h2>
                <div>
                { this.props.busList.length > 0 ? ( 
                        <BusList list={ 
                            this.props.busList.filter(bus => ( 
                                bus.bus_name === this.props.bus_name
                            ))
                        } /> 
                    ) : ( 
                        <span> 로딩중임 ... </span> 
                )}
                </div>
            </div>
        ) 
    } 
} export default Viewer;

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


    render(){ 
        return (
            <div>
               \ <div>
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

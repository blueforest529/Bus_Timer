import React, { Component } from 'react'; 
import axios from 'axios';
import Header from "../component/Header"; 
import Nav from "../component/Nav"; 
import Footer from "../component/Footer";
import WebtoonList from "../component/WebtoonList";


class Main extends Component{ 
    constructor(props){ 
        super(props); 
        
        const query = new URLSearchParams(props.location.search); 
        const bus_name = query.get('bus_name');

        this.state = { 
            bus_name :  bus_name || '33',
            busList : [] 
         }; 
    } 
    
    componentDidMount(){ 
        this._getList();
    } 

    componentDidUpdate(prevProps){
        
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let prevbus_name = prevQuery.get('bus_name');
        let query = new URLSearchParams(this.props.location.search);
        let bus_name = query.get('bus_name');

            if(prevbus_name !== bus_name){
                this.setState({
                    bus_name
            })
            console.log(bus_name);
        };

    }
        
    _getList(){ 
        const apiUrl = 'dummy/bus_list.json'; 
       
        axios.get(apiUrl) 
            .then(data => { 
                this.setState({ 
                    busList : data.data.bus_title 
                }); 
            }) 
            .catch(error => {
                console.log(error); 
            }); 
    }
        
    render(){ 
        return ( 
            <div> 
                <Header /> 
                <Nav /> 
                { this.state.busList.length > 0 ? ( 
                    <WebtoonList list={ 
                        this.state.busList.filter(webtoon => ( 
                            webtoon.bus_name === this.state.bus_name
                        ))
                    } /> 
                ) : ( 
                    <span> 로딩중임 ... </span> 
                )}

                <Footer /> 
            </div>

        )} 
    } 
export default Main;
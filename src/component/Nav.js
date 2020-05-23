import React from 'react'; 
import {Link} from "react-router-dom";

    const Nav = (props) => ( 
        
        <ul className="nav"> 
            
            <li>
                <Link to="/?bus_name=33" className={ props.bus_name === '33' ? 'tab_day on' : 'tab_day' }>33</Link>
            </li> 
            <li>
                <Link to="/?bus_name=85" className={ props.bus_name === '85' ? 'tab_day on' : 'tab_day' }>85</Link>
            </li> 
            
        </ul> 
    ) 
    
export default Nav;
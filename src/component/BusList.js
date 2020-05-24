import React from 'react'; 
const BusList = (props) => { 

return ( 
    <ul className="list_webtoon"> 
        { props.list.map((bus, index) => ( 
            <li key={index}> 
                <strong className="title_webtoon"> 
                {bus.time_hour}:{bus.time_min} 
                </strong>
            </li>
            )) 
        } 
    </ul>
 ) 
} 

export default BusList;

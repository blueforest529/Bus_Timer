import React from 'react'; 
const WebtoonList = (props) => { 

return ( 
    <ul className="list_webtoon"> 
        { props.list.map((webtoon, index) => ( 
            <li key={index}> 
                <strong className="title_webtoon"> 
                {webtoon.time} 
                </strong>
            </li>
            )) 
        } 
    </ul>
 ) 
} 

export default WebtoonList;


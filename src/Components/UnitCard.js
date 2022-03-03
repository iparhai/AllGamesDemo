import React from 'react'
import $ from 'jquery'; 
// Route
import Units from '../Pages/Units';
import {Link,useSearchParams} from "react-router-dom"; 
import Levels from '../Pages/Levels';

export default function UnitCard(props) {
    // const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("gender");
    const style = {
        backgroundColor: `${props.color}`,
        width : '13vw',
        height : '20vh',
        lineHeight: '5vh',
        color : 'white',
        fontSize : '100%',
        fontWeight : 'bold',
        borderRadius: '10px',
        margin : '1%',
        padding : '1vw',
        // fontSize: 
    }
    const para={
        fontSize : '14px',
        fontWeight : 500
    }
    const link={
        color: 'white',
        textDecoration :'none'
    }
    return (
        <div className='card card2' style={style}>
            {/* <a style={link} target='_blank' href={props.link}> */}
            {/* <Link to={`/Levels/${searchParams}`} style={{textDecoration:'none',color:'white'}}> */}
                <div>{props.text}</div>
                <div style={para}>{props.description}</div>
            {/* </Link> */}
            {/* </a> */}
        </div>
    )
}

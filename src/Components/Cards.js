import React from 'react'
import $ from 'jquery'; 
// Route
import Units from '../Pages/Units';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import '../Pages/style.css';
import {useParams} from 'react-router-dom';

export default function Cards(props) {
    // const {title,subject} = useParams();
   
    const style = {
        backgroundColor: `${props.color}`,
        width : '15vw',
        height : '20vh',
        lineHeight: '20vh',
        color : 'white',
        fontSize : '100%',
        fontWeight : 'bold',
        borderRadius: '10px',
        margin : '1%'
    }
    return (
        // <Link to="/Units" style={{ textDecoration: 'none' }}>
            <div className='card card2' style={style}>
                {props.text }
            </div>
        // </Link>
    )
}

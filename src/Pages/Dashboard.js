import React, { useState } from 'react'
import {Link, useParams,useSearchParams } from "react-router-dom";
import iparhai from '../assets/iparhai.svg'
import cross from '../assets/cross.svg';
import info from '../assets/info.svg';
import Cards from '../Components/Cards';
import './style.css';
// route to pages
import Login from './Login'
import Units from './Units'


function Dashboard() {
    const [gradeUrl,setGradeUrl] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("gender");
    const gradeArray = [
        {number:1,grade:'Grade1',color:'#528cce',subject:'Maths'},
        {number:2,grade:'Grade2',color:'#82ac66',subject:'Maths'},
        {number:3,grade:'Grade3',color:'#d48181',subject:'Maths'},
        {number:4,grade:'Grade4',color:'#6b819a',subject:'Maths'},
        {number:5,grade:'Grade5',color:'#a5a5a5',subject:'Maths'}
    ]
    // function setURL(obj){
    //    setGradeUrl(...obj.number);
    // }
    console.log(gradeArray);
    return (
        <div className='dashboard'>
            <div className='dash_header'>
                <nav>
                    <ul>
                        <li><img src={iparhai} /></li>
                        <li className='subtitles'>
                            <h6>Learn via gamifying education</h6>
                            <p>Follow by: Single National Curriculum</p>
                        </li>

                        <li className='right' style={{ float: 'right' }}>
                            <img className='info' src={info} />
                            <Link to="/AllGamesDemo/Login">
                                <img className='cross' src={cross} />
                            </Link>
                        </li>

                    </ul>
                </nav>
                <div className='headingMaths' style={{ marginTop: '10vh' }}>
                    <h1><span>Mathematics</span> Games</h1>
                    <p>Dynamic Game Generation Grade 1 to 5</p>
                </div>
                <div className='cardholder1'>
                    {
                        gradeArray.map((obj,idx)=>{
                            return(
                                <Link to={`/AllGamesDemo/Units/${obj.grade}/${obj.subject}?${searchParams}&grade=${obj.number}`} style={{textDecoration:'none'}}>
                                    <Cards text={obj.grade} color={obj.color}/>
                                </Link>
                            )
                        })
                    }
                </div>

            </div>
        </div>

    )

}
export default Dashboard;
// export {handleClick}

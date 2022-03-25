import React from 'react'
import {Link } from "react-router-dom";
import { useParams , useSearchParams} from 'react-router-dom';
import iparhai from '../assets/iparhai.svg'
import cross from '../assets/cross.svg';
import info from '../assets/info.svg';
import Card from '../Components/Cards';
import UnitCard from '../Components/UnitCard';
import './style.css';
// route to login page
import Dashboard from './Dashboard'
import Levels from './Levels'
// import Units from './'

export default function Units({data}) {
    
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("gender");
    const [searchgrade, setSearchGrade] = useSearchParams();
    
    const {title,subject} = useParams();
    let obj = data.find(o => o.title === title);
    console.log(obj);

    return (
        <div className='dashboard'>
            <div className='dash_header'>
                <nav>
                    <ul>
                        <li><img src={iparhai} /></li>
                        <li className='subtitles'>
                            <h6>{obj.title} - Mathematics</h6>
                            <p>Follow by: Single National Curriculum</p>
                        </li>

                        <li className='right' style={{ float: 'right' }}>
                            <img className='info' src={info} />
                            <Link to="/Dashboard">
                                <img className='cross' src={cross} />
                            </Link>
                        </li>

                    </ul>
                </nav>
                
                <div className='cardholder2'>
                    {   
                        searchParams.get("grade")=='2'?
                        data.filter((obj)=>obj.title === title).map((obj,idx)=>{
                            return(
                            <Link to={`/Levels/?${searchParams}&gameName=${idx}`} style={{textDecoration:'none',color:'white',margin:'1%'}}>
                                <UnitCard Key={idx} color={obj.color} text={obj.unit} description={obj.descrip} link={obj.link}/>
                            </Link>
                            )    
                        })
                        :
                        data.filter((obj)=>obj.title === title).map((obj,idx)=>{
                            return(
                                <Link to={`/Levels/?${searchParams}&gameName=${obj.gameName}`} style={{textDecoration:'none',color:'white',margin:'1%'}}>
                                    <UnitCard Key={idx} color={obj.color} text={obj.unit} description={obj.descrip} link={obj.link}/>
                                </Link>
                            )
                        })

                    }
                </div>
            </div>
        </div>
        
    )
}


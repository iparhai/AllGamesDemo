import React from 'react'
import {Link } from "react-router-dom";
import { useParams , useSearchParams } from 'react-router-dom';
import iparhai from '../assets/iparhai.svg'
import cross from '../assets/cross.svg';
import info from '../assets/info.svg';
import Card from '../Components/Cards';
import UnitCard from '../Components/UnitCard';
import './style.css';
// route to login page
import Dashboard from './Dashboard'
// import Levels from './Levels.js'
import Units from './Units'

export default function Levels({data}) {
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("gender");
    const [searchgrade, setSearchGrade] = useSearchParams();
    const [searchIndex,setSearchIndex] = useSearchParams();
    // console.log(parseInt(searchIndex.get("gameName"))+6);
    // console.log(data[parseInt(searchIndex.get("gameName"))+6].link)
    const difficulty = [
        {dif:'b',level:'Beginner',color:'#528cce',subject:'Maths'},
        {dif:'i',level:'Intermediate',color:'#82ac66',subject:'Maths'},
        {dif:'a',level:'Advance',color:'#d48181',subject:'Maths'},
    ]
    
    return (
        <div className='dashboard'>
            <div className='dash_header'>
                <nav>
                    <ul>
                        <li><img src={iparhai} /></li>
                        <li className='subtitles'>
                            <h6>Game Levels</h6>
                            <p>Follow by: Single National Curriculum</p>
                        </li>

                        <li className='right' style={{ float: 'right' }}>
                            <img className='info' src={info} />
                            <Link to="/AllGamesDemo/Dashboard">
                                <img className='cross' src={cross} />
                            </Link>
                        </li>

                    </ul>
                </nav>
                <div className='cardholder2'>
                {    
                    searchgrade.get("grade") == '2'?
                    difficulty.map((obj,idx)=>{
                        return(
                            <a href={data[parseInt(searchIndex.get("gameName"))+7].link} target='_blank' style={{textDecoration:'none',margin:'1%'}}>
                                <Card text={obj.level} color={obj.color}/>
                            </a>
                        )
                    })
                    // 'NULL'
                    :
                    searchgrade.get("grade") == '5'?
                        <UnitCard Key={2} color='#f00' text='Comming soon' description='In progress'/>
                    :
                    difficulty.map((obj,idx)=>{
                        return(
                            <a href={`https://iparhai.github.io/dynamicGame/?${searchParams}&dif=${obj.dif}`} target='_blank' style={{textDecoration:'none',margin:'1%'}}>
                                <Card text={obj.level} color={obj.color}/>
                            </a>
                        )
                    })
                }
                </div>
            </div>
        </div>
        
    )
}


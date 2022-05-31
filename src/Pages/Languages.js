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
    const Languages = [
        {lang:'u',Language:'Urdu',color:'#528cce',subject:'Maths'},
        {lang:'e',Language:'English',color:'#82ac66',subject:'Maths'},
        {lang:'a',Language:'Arabic',color:'#d48181',subject:'Maths'},
        {lang:'p',Language:'Pashto',color:'#d48181',subject:'Maths'},
        {lang:'k',Language:'Korean',color:'#528cce',subject:'Maths'},
    ]
    
    return (
        <div className='dashboard'>
            <div className='dash_header'>
                <nav>
                    <ul>
                        <li><img src={iparhai} /></li>
                        <li className='subtitles'>
                            <h6>Game Levels</h6>
                            {/* <p>Follow by: Single National Curriculum</p> */}
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
                    searchgrade.get("grade") == '2'?
                    Languages.map((obj,idx)=>{
                        return(
                            <a href={data[parseInt(searchIndex.get("gameName"))+3].link} target='_blank' style={{textDecoration:'none',margin:'1%'}}>
                                <Card text={obj.level} color={obj.color}/>
                            </a>
                        )
                    })
                    // 'NULL'
                    :
                    searchgrade.get("grade") == '5'?
                        <UnitCard Key={2} color='#f00' text='Comming soon' description='In progress'/>
                    :
                    Languages.map((obj,idx)=>{
                        return(
                            // <Link to={`/Languages/?${searchParams}&gameName=${obj.gameName}`} style={{textDecoration:'none',color:'white',margin:'1%'}}>
                                <a href={`https://iparhai.github.io/dynamicGame/?${searchParams}&lang=${obj.lang}`} target='_blank' style={{textDecoration:'none',margin:'1%'}}>
                                    <Card text={obj.Language} color={obj.color}/>
                                </a>
                            // </Link>
                        )
                    })
                }
                </div>
            </div>
        </div>
        
    )
}


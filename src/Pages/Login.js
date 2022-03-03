import React, { useState } from 'react'
import './style.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import logo from '../assets/iparhailog.svg';
import Dashboard from './Dashboard';



export default function Login() {
    const [gender,setGender] = useState(0);
    
    return (
        <div className='main'>
            <div className='header'>
                <img src={logo} className='logo'/>
            </div>
            <div className='tagline header'>
                <h1>Learn & Play with us!</h1>
                <span>No boring lectures, learn with us while playing</span>
            </div>
            <div className='form'>
                <div class='row1'>
                    <div class='col1'>
                        <label><h6>First Name</h6></label>
                        <div className='userInput'>
                            <input placeholder='First Name' type='name'/>
                        </div>
                    </div>
                    <div class='col1'>
                        <label><h6>Last Name</h6></label>
                        <div className='userInput'>
                            <input placeholder='Last Name' type='name'/>
                        </div>
                    </div>
                </div>
                <div class='row2'>
                    <div class='col1'>
                        <label><h6>Date of birth</h6></label>
                        <div className='userInput'>
                            <input placeholder='' type='date'/>
                        </div>
                    </div>
                    <div class='col1'>
                        <label><h6>Are you male or female?</h6></label>
                        <div className='userInput'>
                            <div class='checkbox'>
                            <input type='radio' name='gender' value='m' onClick={()=>setGender(0)} />
                            <label>Male</label>
                            </div>
                            <div class='checkbox'>
                            <input type='radio' name='gender' value='f' onClick={()=>setGender(1)}/>
                            <label>Female</label>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                <div style={{textAlign:'center'}}>
                    <Link to={`/Dashboard/?gender=${gender==0?"m":'f'}`}>
                        <button className='submit'>Start gaming session</button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

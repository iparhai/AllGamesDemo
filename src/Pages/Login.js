import React, { useState } from 'react'
import './style.css';
import { BrowserRouter, Routes, Route,Link,useNavigate} from "react-router-dom";
import logo from '../assets/iparhailog.svg';
import Dashboard from './Dashboard';



export default function Login() {
    const [fName, setFName] = React.useState();
    const [lName, setLName] = React.useState();
    // const [fName, setFName] = React.useState();
    // const [fName, setFName] = React.useState();
    const [gender,setGender] = useState(0);
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        if(fName==="" || lName===""){
            alert("All fields are empy")
        }else{
            navigate(`/Dashboard/?gender=${gender==0?"m":'f'}`)
        }
    }
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
                            <input
                                placeholder='First Name'
                                type='name'
                                value={fName}
                                onChange={(e)=>setFName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class='col1'>
                        <label><h6>Last Name</h6></label>
                        <div className='userInput'>
                            <input
                                placeholder='Last Name'
                                type='name'
                                value={lName}
                                onChange={(e)=>setLName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div class='row2'>
                    <div class='col1'>
                        <label><h6>Date of birth</h6></label>
                        <div className='userInput'>
                            <input placeholder='' type='date' required/>
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
                    {/* <Link to={`/Dashboard/?gender=${gender==0?"m":'f'}`}>
                        <button className='submit' type='submit'>Start gaming session</button>
                    </Link> */}
                    {/* <a href={`/Dashboard/?gender=${gender==0?"m":'f'}`}>
                        <button className='submit' type='submit'>Start gaming session</button>
                    </a> */}
                    <button type='Submit' onClick={handleClick} className='submit'>Start gaming session</button>
                </div>
                
            </div>
        </div>
    )
}

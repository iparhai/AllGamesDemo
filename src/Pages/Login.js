import React, { useState } from 'react'
import './style.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import logo from '../assets/iparhailog.svg';
import Dashboard from './Dashboard';



export default function Login() {
    const [fName, setFName] = React.useState('');
    const [lName, setLName] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [gender, setGender] = useState(0);
    const [error, setError] = useState({ err: false, msg: '' })


    console.log(fName);
    console.log(lName);
    console.log(dob);

    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        console.log('clicked')
        if (fName == "" || lName == "" || dob == '') {
            setError({ ...error, err: true, msg: 'All fields are mandatory' })
        }
        else{
            navigate(`/Dashboard/?gender=${gender==0?"m":'f'}`)
        }
    }

    console.log(error)
    return (
        <div className='main'>
            <div className='header'>
                <img src={logo} className='logo' />
            </div>
            <div className='tagline header'>
                <h1>Learn & Play with us!</h1>
                <span>No boring lectures, learn with us while playing</span>
                {
                    error.err &&
                    <div
                        className='error__msg'
                    >
                        {error.msg}
                        <i class="fa fa-close cross__btn"
                            onClick={()=>setError({...error , err : false})}
                        ></i>
                    </div>
                }
            </div>
            <div className='form'>
                <form onSubmit={handleClick}>
                    <div class='row1'>
                        <div class='col1'>
                            <label><h6>First Name</h6></label>
                            <div className='userInput'>
                                <input
                                    placeholder='First Name'
                                    type='text'
                                    value={fName}
                                    onChange={(e) => setFName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class='col1'>
                            <label><h6>Last Name</h6></label>
                            <div className='userInput'>
                                <input
                                    placeholder='Last Name'
                                    type='text'
                                    value={lName}
                                    onChange={(e) => setLName(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div class='row2'>
                        <div class='col1'>
                            <label><h6>Date of birth</h6></label>
                            <div className='userInput'>
                                <input placeholder='' type='date' onChange={(e) => setDob(e.target.value)} />
                            </div>
                        </div>
                        <div class='col1'>
                            <label><h6>Are you male or female?</h6></label>
                            <div className='userInput'>
                                <div class='checkbox'>
                                    <input type='radio' name='gender' value='m' onClick={() => setGender(0)} />
                                    <label>Male</label>
                                </div>
                                <div class='checkbox'>
                                    <input type='radio' name='gender' value='f' onClick={() => setGender(1)} />
                                    <label>Female</label>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        {/* <Link to={`/Dashboard/?gender=${gender==0?"m":'f'}`}>
                        <button className='submit' type='submit'>Start gaming session</button>
                    </Link> */}
                        {/* <a href={`/Dashboard/?gender=${gender==0?"m":'f'}`}>
                        <button className='submit' type='submit'>Start gaming session</button>
                    </a> */}
                        <button type='Submit' className='submit'>Start gaming session</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

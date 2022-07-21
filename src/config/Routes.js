import React from 'react'
import {
    BrowserRouter as Router,
    HashRouter,
    Routes,
    Route,
    // Switch
} from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import Units from '../Pages/Units';
import Levels from '../Pages/Levels';
import Languages from '../Pages/Languages'
import Login from '../Pages/Login';

const data = [
    // grade1 start
    { gameName: 'cn_1_9', title: 'Grade1', unit: 'Unit 1.1', descrip: 'Numbers from 1 to 9', color: '#528cce', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=cn_1_9&dif=b&gender=f' },
    { gameName: 'ascorder', title: 'Grade1', unit: 'Unit 1.2', descrip: 'Ascending order', color: '#d48181', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=ascorder&dif=b&gender=f' },
    { gameName: 'analogtime', title: 'Grade1', unit: 'Unit 1.3', descrip: 'Analog Time', color: '#d48181', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=ascorder&dif=b&gender=f' },
    // grade2 start
    { gameName: 'cn_1_9', title: 'Grade2', unit: 'Unit 2.1', descrip: 'Addition of One digit', color: '#528cce', link: 'https://shaffan-nu.github.io/iparhaiMathGame/?limit=5&dif=b' },
    // grade3 start
    { gameName: 'numberline', title: 'Grade3', unit: 'Unit 3.1', descrip: 'Number Line', color: '#528cce' },
    { gameName: 'evennodd', title: 'Grade3', unit: 'Unit 3.2', descrip: 'Even Odd Numbers', color: '#528cce' },
    { gameName: 'ascending', title: 'Grade3', unit: 'Unit 3.3', descrip: 'Even Odd Numbers', color: '#528cce' },
    // grade4 start
    { gameName: 'pvm', title: 'Grade4', unit: 'Unit 4.2', descrip: 'Place Value', color: '#9a9f69' }, 
    { gameName: 'anu6d', title: 'Grade4', unit: 'Unit 4.2', descrip: 'Addition Using Carry', color: '#9a9f69' }, 
    { gameName: 'pac', title: 'Grade4', unit: 'Unit 4.3', descrip: 'Prime and Composite', color: '#9a9f69' }, 
    // grade5 start
    { gameName: 'tally', title: 'Grade5', unit: 'Unit 5.1', descrip: 'Tally Method', color: '#82ac66' },
    { gameName: 'angles', title: 'Grade5', unit: 'Unit 5.2', descrip: 'Making Angles', color: '#82ac66' },
    { gameName: 'con', title: 'Grade5', unit: 'Unit 5.3', descrip: 'Missing number', color: '#82ac66' },
]
export default function AppRoutes() {
    return (
        <div>
            {/* <BrowserRouter>
                <Routes>
                    <Route path="/AllGamesDemo/" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Units/:title/:subject" element={<Units data={data} />} />
                    <Route path="/Levels" element={<Levels data={data} />} />
                    </Routes>
                </BrowserRouter> */}
            <Router basename='/AllGamesDemo'>
                <Routes>
                    <Route exact path="" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Units/:title/:subject" element={<Units data={data} />} />
                    <Route path="/Levels" element={<Levels data={data} />} />
                    <Route path="/Languages" element={<Languages data={data} />} />
                </Routes>
            </Router>
        </div>
    )
}

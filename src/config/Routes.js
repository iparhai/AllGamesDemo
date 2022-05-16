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
    { gameName: 'cn_1_9', title: 'Grade1', unit: 'Unit 1.1', descrip: 'Numbers from 1 to 9', color: '#528cce', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=cn_1_9&dif=b&gender=f' },
    // { gameName: 'mnwn', title: 'Grade1', unit: 'Unit 1.2', descrip: 'Match the number with its name', color: '#82ac66', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=mnwn&dif=b&gender=f' },
    { gameName: 'ascorder', title: 'Grade1', unit: 'Unit 1.2', descrip: 'Ascending order', color: '#d48181', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=ascorder&dif=b&gender=f' },
    // { gameName: 'digiclock', title: 'Grade1', unit: 'Unit 1.4', descrip: 'Digital Time', color: '#6b819a', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=digiclock&dif=b&gender=f' },
    // { gameName: 'ban', title: 'Grade1', unit: 'Unit 1.5', descrip: 'Before after number', color: '#9a9f69', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=ban&dif=b&gender=f' },
    { gameName: 'analogtime', title: 'Grade1', unit: 'Unit 1.3', descrip: 'Time', color: '#a46477', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=analogtime&dif=b&gender=f' },
    // { gameName: 'idsh', title: 'Grade1', unit: 'Unit 1.7', descrip: 'Identify Shapes', color: '#675b69', link: 'https://iparhai.github.io/dynamicGame/?grade=1&gameName=idsh&dif=b&gender=f' },
    // grade2 start
    { gameName: 'cn_1_9', title: 'Grade2', unit: 'Unit 2.1', descrip: 'Addition of One digit', color: '#528cce', link: 'https://shaffan-nu.github.io/iparhaiMathGame/?limit=5&dif=b' },
    // { gameName: 'cn_1_9', title: 'Grade2', unit: 'Unit 2.2', descrip: 'Addition of digit', color: '#82ac66', link: 'https://shaffan-nu.github.io/addition_counting_object_2_digits/' },
    { gameName: 'cn_1_9', title: 'Grade2', unit: 'Unit 2.3', descrip: 'Number Line Addition', color: '#d48181', link: 'https://iparhai.github.io/addition_numberLine/' },
    { gameName: 'cn_1_9', title: 'Grade2', unit: 'Unit 2.4', descrip: 'Addition in word problem', color: '#6b819a', link: 'https://iparhai.github.io/addition_wordProblem/' },
    // { gameName: 'cn_1_9', title: 'Grade2', unit: 'Unit 2.5', descrip: 'Division problem', color: '#9a9f69', link: 'https://iparhai.github.io/division_within_10/' },
    // { gameName: 'cn_1_9', title: 'Grade2', unit: 'Unit 2.6', descrip: 'Multiplication problem', color: '#82ac66', link: 'https://iparhai.github.io/multiplication_within_10/' },
    // grade3 start
    { gameName: 'numberline', title: 'Grade3', unit: 'Unit 1.1', descrip: 'number line', color: '#528cce' },
    // { gameName: 'numberline', title: 'Grade3', unit: 'Unit 1.1', descrip: 'number line(English)', color: '#528cce' },
    // { gameName: 'numberline', title: 'Grade3', unit: 'Unit 1.1', descrip: 'number line(Pashto)', color: '#528cce' },
    // { gameName: 'numberline', title: 'Grade3', unit: 'Unit 1.1', descrip: 'number line(Arabic)', color: '#528cce' },
    // { gameName: 'compare', title: 'Grade3', unit: 'Unit 1.4', descrip: 'Compare & order numbers', color: '#528cce' },
    // { gameName: 'ascending', title: 'Grade3', unit: 'Unit 1.5', descrip: 'Ascending', color: '#528cce' },
    // { gameName: 'descending', title: 'Grade3', unit: 'Unit 1.6', descrip: 'descending', color: '#528cce' },
    // { gameName: 'numberline', title: 'Grade3', unit: 'Unit 1.7', descrip: 'number line', color: '#528cce' },
    // { gameName: 'anu4d', title: 'Grade3', unit: 'Unit 2.1', descrip: 'addition using carry', color: '#528cce' },
    // { gameName: 'snu4d', title: 'Grade3', unit: 'Unit 2.2', descrip: 'subtraction with borrowing', color: '#528cce' },
    // { gameName: 'multi', title: 'Grade3', unit: 'Unit 2.3', descrip: 'multiplication', color: '#528cce' },
    // { gameName: 'div', title: 'Grade3', unit: 'Unit 2.4', descrip: 'division', color: '#528cce' },
    // { gameName: 'fraction', title: 'Grade3', unit: 'Unit 3.1', descrip: 'fraction', color: '#82ac66' },
    // { gameName: 'pimp', title: 'Grade3', unit: 'Unit 3.2', descrip: 'proper improper fraction', color: '#82ac66' },
    // { gameName: 'addingfraction', title: 'Grade3', unit: 'Unit 3.3', descrip: 'addition of fractions', color: '#d48181' },
    // { gameName: 'subtractingfraction', title: 'Grade3', unit: 'Unit 3.4', descrip: 'subtraction of fractions', color: '#d48181'},
    // { gameName: 'massweight', title: 'Grade3', unit: 'Unit 4.1', descrip: 'unit of mass weight', color: '#82ac66'},
    // { gameName: 'geometryshapes', title: 'Grade3', unit: 'Unit 5.1', descrip: 'geometry shapes', color: '#82ac66'},
    // { gameName: 'parameter', title: 'Grade3', unit: 'Unit 5.2', descrip: 'Parameter of shapes', color: '#82ac66'},
    // { gameName: 'pictoshop', title: 'Grade3', unit: 'Unit 6.1', descrip: 'picture graph', color: '#528cce'},
    // grade4 start
    { gameName: 'niw', title: 'Grade4', unit: 'Unit 1.1', descrip: 'numbers', color: '#9a9f69' },
    { gameName: 'placevalue', title: 'Grade4', unit: 'Unit 1.2', descrip: 'place value', color: '#9a9f69' },
    { gameName: 'missing', title: 'Grade4', unit: 'Unit 1.3', descrip: 'missing numbers', color: '#9a9f69' },
    { gameName: 'asccdsc', title: 'Grade4', unit: 'Unit 1.4', descrip: 'ascending descending', color: '#9a9f69' },
    { gameName: 'anu6d', title: 'Grade4', unit: 'Unit 1.5', descrip: 'addition using carry', color: '#9a9f69' },
    { gameName: 'snu6d', title: 'Grade4', unit: 'Unit 1.6', descrip: 'Subtraction Using Borrow', color: '#9a9f69' },
    { gameName: 'multi', title: 'Grade4', unit: 'Unit 1.7', descrip: 'multiplication', color: '#9a9f69' },
    { gameName: 'divide', title: 'Grade4', unit: 'Unit 1.8', descrip: 'division', color: '#9a9f69' },
    { gameName: 'dmas', title: 'Grade4', unit: 'Unit 1.9', descrip: 'dmas', color: '#9a9f69' },
    { gameName: 'pcnum', title: 'Grade4', unit: 'Unit 2.1', descrip: 'prime & composite numbers', color: '#9a9f69' },
    { gameName: 'length', title: 'Grade4', unit: 'Unit 3.1', descrip: 'length', color: '#9a9f69' },
    { gameName: 'mass', title: 'Grade4', unit: 'Unit 3.2', descrip: 'mass', color: '#9a9f69' },
    { gameName: 'volume', title: 'Grade4', unit: 'Unit 3.2', descrip: 'volume', color: '#9a9f69' },
    { gameName: 'mul_of_fract', title: 'Grade4', unit: 'Unit 4.1', descrip: 'multiplication of fraction', color: '#9a9f69' },
    { gameName: 'div_of_fract', title: 'Grade4', unit: 'Unit 4.2', descrip: 'division of fraction', color: '#9a9f69' },
    { gameName: 'geometrybox', title: 'Grade4', unit: 'Unit 4.2', descrip: 'Geometry Box', color: '#528cce' },
    { gameName: 'angles', title: 'Grade4', unit: 'Unit 4.3', descrip: 'Angles', color: '#82ac66' },  

    // grade5 start
    { title: 'Grade5', unit: 'Comming soon', descrip: 'In Progress', color: '#f00' },
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

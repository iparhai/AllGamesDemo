import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard';
import Units from '../Pages/Units';
import Levels from '../Pages/Levels';
import Login from '../Pages/Login';

const data = [
    {gameName:'cn_1_9',title:'Grade1',unit:'Unit 1.1',descrip:'Numbers from 1 to 9',color:'#528cce',link:'https://iparhai.github.io/dynamicGame/?grade=1&gameName=cn_1_9&dif=b&gender=f'},
    {gameName:'mnwn',title:'Grade1',unit:'Unit 1.2',descrip:'Match the number with its name',color:'#82ac66',link:'https://iparhai.github.io/dynamicGame/?grade=1&gameName=mnwn&dif=b&gender=f'},
    {gameName:'ascorder',title:'Grade1',unit:'Unit 1.3',descrip:'Ascending order',color:'#d48181',link:'https://iparhai.github.io/dynamicGame/?grade=1&gameName=ascorder&dif=b&gender=f'},
    {gameName:'dscorder',title:'Grade1',unit:'Unit 1.4',descrip:'Descending order',color:'#6b819a',link:'https://iparhai.github.io/dynamicGame/?grade=1&gameName=dscorder&dif=b&gender=f'},
    {gameName:'ban',title:'Grade1',unit:'Unit 1.5',descrip:'Before after number',color:'#9a9f69',link:'https://iparhai.github.io/dynamicGame/?grade=1&gameName=ban&dif=b&gender=f'},
    {gameName:'analogtime',title:'Grade1',unit:'Unit 1.6',descrip:'Time',color:'#a46477',link:'https://iparhai.github.io/dynamicGame/?grade=1&gameName=analogtime&dif=b&gender=f'},
    {gameName:'idsh',title:'Grade1',unit:'Unit 1.7',descrip:'Identify Shapes',color:'#675b69',link:'https://iparhai.github.io/dynamicGame/?grade=1&gameName=idsh&dif=b&gender=f'},
    // grade2 start
    {gameName:'cn_1_9',title:'Grade2',unit:'Unit 1',descrip:'Addition of One digit',color:'#528cce',link:'https://shaffan-nu.github.io/iparhaiMathGame/?limit=5&dif=b'},
    {gameName:'cn_1_9',title:'Grade2',unit:'Unit 2',descrip:'Addition of Two digit',color:'#82ac66',link:'https://shaffan-nu.github.io/addition_counting_object_2_digits/'},
    {gameName:'cn_1_9',title:'Grade2',unit:'Unit 3',descrip:'Number Line Addition',color:'#d48181',link:'https://iparhai.github.io/addition_numberLine/'},
    {gameName:'cn_1_9',title:'Grade2',unit:'Unit 4',descrip:'Addition in word problem',color:'#6b819a',link:'https://iparhai.github.io/addition_wordProblem/'},
    {gameName:'cn_1_9',title:'Grade2',unit:'Unit 5',descrip:'Division problem',color:'#9a9f69',link:'https://iparhai.github.io/division_within_10/'},
    {gameName:'cn_1_9',title:'Grade2',unit:'Unit 6',descrip:'Multiplication problem',color:'#82ac66',link:'https://iparhai.github.io/multiplication_within_10/'},
    // grade3 start
    {gameName:'roman',title:'Grade3',unit:'Unit 1',descrip:'roman numbers',color:'#528cce'},
    {gameName:'properimproperfraction',title:'Grade3',unit:'Unit 2',descrip:'proper & improper fractions',color:'#82ac66'},
    {gameName:'addingfraction',title:'Grade3',unit:'Unit 3',descrip:'addition of fractions',color:'#d48181'},
    {gameName:'subtractingfraction',title:'Grade3',unit:'Unit 4',descrip:'subtraction of fractions',color:'#6b819a',link:'https://iparhai.github.io/dynamicGame/?grade=3&gameName=subtractingfraction&dif=b&gender=f'},
    {gameName:'identifyfraction',title:'Grade3',unit:'Unit 5',descrip:'identify fractions',color:'#9a9f69',link:'https://iparhai.github.io/dynamicGame/?grade=3&gameName=identifyfraction&dif=b&gender=f'},
    {gameName:'pictographmostleast',title:'Grade3',unit:'Unit 6',descrip:'Picture graph',color:'#82ac66',link:'https://iparhai.github.io/dynamicGame/?grade=3&gameName=pictographmostleast&dif=b&gender=f'},
    {gameName:'pictoshop',title:'Grade3',unit:'Unit 6',descrip:'Word problem',color:'#82ac66',link:'https://iparhai.github.io/dynamicGame/?grade=3&gameName=pictoshop&dif=b&gender=f'},
    // grade4 start
    {gameName:'niw',title:'Grade4',unit:'Unit 1',descrip:'number in words',color:'#528cce'},
    {gameName:'anu6d',title:'Grade4',unit:'Unit 2',descrip:'Carry & borrow',color:'#82ac66'},
    // grade5 start
    {title:'Grade5',unit:'Comming soon',descrip:'In Progress',color:'#f00'},
]
export default function AppRoutes() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Units/:title/:subject" element={<Units data={data} />} />
                    <Route path="/Levels" element={<Levels data={data} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
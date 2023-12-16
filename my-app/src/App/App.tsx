import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import {CustomizedDot} from "./CustomizedDot";
import {findPvZScoreMoreThanOne} from "./findPvZScoreMoreThanOne";
import {data} from "./linesData";
import {findUvZScoreMoreThanOne} from "./findUvZScoreMoreThanOne";

import '../styles.css';

export const App = () => {
    return (
        <LineChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray='3 3'/>
            <XAxis dataKey='name'/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line dot={<CustomizedDot zScoreDotIndex={findPvZScoreMoreThanOne(data)}/>}
                  type='monotone' dataKey='pv'
                  stroke='#8884d8' activeDot={{r: 8}}/>
            <Line dot={<CustomizedDot zScoreDotIndex={findUvZScoreMoreThanOne(data)}/>}
                  type='monotone' dataKey='uv'
                  stroke='#82ca9d' activeDot={{r: 8}}/>
        </LineChart>
    );
};

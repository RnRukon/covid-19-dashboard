import React from 'react';
import { ComposedChart, ResponsiveContainer, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Bar } from 'recharts';
const GlobalChart = ({ GlobalData }) => {
    const data = [
        {
            "name": "NewConfirmed",
            "uv": GlobalData?.Global?.NewConfirmed,
            "pv": GlobalData?.Global?.NewConfirmed,

        },
        {
            "name": "NewDeaths",
            "uv": GlobalData?.Global?.NewDeaths,
            "pv": GlobalData?.Global?.NewDeaths,

        },
        {
            "name": "NewRecovered",
            "uv": GlobalData?.Global?.NewRecovered,
            "pv": GlobalData?.Global?.NewRecovered,

        },
        {
            "name": "TotalConfirmed",
            "uv": GlobalData?.Global?.TotalConfirmed,
            "pv": GlobalData?.Global?.TotalConfirmed,

        },
        {
            "name": "TotalDeaths",
            "uv": GlobalData?.Global?.TotalDeaths,
            "pv": GlobalData?.Global?.TotalDeaths,

        },
        {
            "name": "TotalRecovered",
            "uv": GlobalData?.Global?.TotalRecovered,
            "pv": GlobalData?.Global?.TotalRecovered,

        }
    ]
    return (
        <div
            // AOS---------
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className='flex justify-center '>
            <ResponsiveContainer width="90%" height={300}>
                <ComposedChart width={730} height={250} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={30} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GlobalChart;
import React from 'react';
import { ComposedChart, ResponsiveContainer, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area, Bar } from 'recharts';
const Chart = ({ covidData }) => {


    const data = [
        {
            "name": "Active",
            "uv": covidData?.Active,
            "pv": covidData?.Active,

        },
        {
            "name": "Confirmed",
            "uv": covidData?.Confirmed,
            "pv": covidData?.Confirmed,

        },
        {
            "name": "Recovered",
            "uv": covidData?.Recovered,
            "pv": covidData?.Recovered,

        },
        {
            "name": "Deaths",
            "uv": covidData?.Deaths,
            "pv": covidData?.Deaths,

        },


    ]
    return (
        <div
            // AOS---------
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=' flex justify-center'>

            <ResponsiveContainer width="90%" height={400}>
                <ComposedChart width={400} height={400} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={100} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
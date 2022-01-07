import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CircularProgress } from '@mui/material';
import Global from '../Global/Global';


const CovidCard = () => {
    const [countries, setCountries] = useState([]);
    const [covidData, setCovidData] = useState([]);

    const [GlobalData, setGlobalData] = useState([]) || '';
    const [singleCounty, setSingleCounty] = useState('')
    const countriesUrl = `https://api.covid19api.com/countries`;
    const CovidUrl = `https://api.covid19api.com/dayone/country/${singleCounty ? singleCounty : 'Bangladesh'}`
    const GlobalUrl = `https://api.covid19api.com/summary`;


    useEffect(() => {
        fetch(GlobalUrl)
            .then(res => res?.json())
            .then(data => setGlobalData(data))
    }, [GlobalUrl, setGlobalData])

    useEffect(() => {
        fetch(countriesUrl)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [countriesUrl])



    useEffect(() => {
        fetch(CovidUrl)
            .then(res => res?.json())
            .then(data => setCovidData(data?.reverse()[0]))
    }, [CovidUrl])





    const handleChange = (event) => {
        const status = event.target.value;
        setSingleCounty(status)

    }
    return (
        <div >
            <div className='container  py-5 '
                style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    padding: '40px 20px',

                }}>
                <div className=' text-center'>
                    <small className=' text-pink-500 font-extrabold uppercase'>Last Covid 19 Update</small>
                    <h5 className=' text-violet-600 font-bold'>{new Date().toDateString()} || {new Date().toLocaleTimeString()}</h5>
                </div>

                {
                    !countries || !covidData ? <CircularProgress color="secondary" /> :
                        <div>
                            <div>
                                <Global GlobalData={GlobalData} />
                            </div>
                            <br />
                            <hr />
                            <FormControl sx={{ minWidth: 1 }}>
                                <InputLabel style={{ color: 'white' }} id="demo-simple-select-autowidth-label">Select County</InputLabel>
                                <Select

                                    labelId="demo-simple-select-autowidth-label"
                                    id="demo-simple-select-autowidth"
                                    value={singleCounty ? singleCounty : 'Bangladesh'}
                                    onChange={handleChange}
                                    autoWidth
                                    label='Select'
                                >

                                    {
                                        countries?.map((country, index) =>
                                            <MenuItem key={index} value={country?.Country}>{country?.Country}</MenuItem>
                                        )
                                    }

                                </Select>
                            </FormControl>

                            <div className=' text-center py-1'>
                                <h2>Coronavirus COVID19 County</h2>
                                <div className=' text-center py-1 text-pink-600'>
                                    <h2 className=' text-center '>{covidData?.Country}</h2>

                                </div>
                            </div>
                            <section class="text-gray-700 body-font">
                                <div class="container  mx-auto">

                                    <div class="flex flex-wrap -m-4 text-center text-white">
                                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full ">
                                            <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110  bg-blue-800">
                                                <i class="fab fa-creative-commons fw-bold text-5xl "></i>

                                                <h2 class="
                                                title-font
                                                font-medium text-3xl
                                                text-white">
                                                    <CountUp start={0} end={covidData?.Active} duration={3} seperator="," />
                                                </h2>
                                                <p class="leading-relaxed text-white">Active</p>
                                            </div>
                                        </div>
                                        {/* ------------------------------ */}
                                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                            <div class="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 bg-sky-900">
                                                <i class="far text-red-600 fa-check-circle fw-bold text-5xl"></i>
                                                <h2 class="title-font font-medium text-3xl ">  <CountUp start={0} end={covidData?.Confirmed} duration={4} seperator="," /></h2>
                                                <p class="leading-relaxed">Confirmed</p>
                                            </div>
                                        </div>
                                        {/* ----------------------------------------- */}
                                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                            <div class="border-2 bg-green-500 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                                <i class="far text- bg-white-600 fa-check-circle fw-bold text-5xl"></i>
                                                <h2 class="title-font font-medium text-3xl "> <CountUp start={1111000} end={covidData?.Recovered} duration={5} seperator="," /></h2>
                                                <p class="leading-relaxed">Recovered</p>
                                            </div>
                                        </div>
                                        {/* ---------------------------------- */}
                                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                            <div class="border-2 bg-rose-700 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                                                <i class="fas fa-skull-crossbones font-bold text-5xl"></i>
                                                <h2 class="title-font font-medium text-3xl ">   <CountUp start={155550} end={covidData?.Deaths} duration={6} seperator="," /></h2>
                                                <p class="leading-relaxed">Deaths</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                }


            </div >
        </div>
    );
};

export default CovidCard;
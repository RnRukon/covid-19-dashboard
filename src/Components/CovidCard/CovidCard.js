import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CircularProgress } from '@mui/material';
import Global from '../Global/Global';
import Chart from '../Chart/Chart';


const CovidCard = () => {
    // state-------------------------
    const [countries, setCountries] = useState([]) || '';
    const [covidData, setCovidData] = useState([]) || '';
    const [GlobalData, setGlobalData] = useState([]) || '';
    const [singleCounty, setSingleCounty] = useState('') || '';
    const [secondChange, setSecondChange] = useState('')
    // Api------------------------------
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
    }, [countriesUrl, setCountries])



    useEffect(() => {
        fetch(CovidUrl)
            .then(res => res?.json())
            .then(data => setCovidData(data?.reverse()[0]))
    }, [CovidUrl, setCovidData])



    const handleChange = (event) => {
        const status = event.target.value;
        setSingleCounty(status)

    }
    const secondChangeFun = () => setSecondChange(new Date().toLocaleTimeString())
    setInterval(secondChangeFun, 1000)

    return (
        <div className=' container'>
            <div className=' py-5 '
                style={{ background: "rgba(255, 255, 255, 0.3)", }}>
                <div className=' text-center'>
                    <small className=' text-pink-500 font-extrabold uppercase'>Last Covid-19 Update</small>
                    <h5 className=' text-violet-600 font-bold'>{new Date().toDateString()} || {secondChange}</h5>
                </div>

                {
                    !countries || !covidData ? <CircularProgress color="secondary" /> :
                        <div>
                            <div>
                                <Global GlobalData={GlobalData} />
                            </div>
                            <br />

                            {/* Form Control  */}
                            <div className='container'>
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
                            </div>

                            <div className=' text-center py-1'>
                                <h2>Coronavirus COVID-19 County</h2>
                                <div className=' text-center py-1 text-pink-600'>
                                    <h2 className=' text-center '>{covidData?.Country}</h2>
                                </div>
                            </div>
                            <section className="text-gray-700 body-font">
                                <div className="container  mx-auto">
                                    <div className="flex flex-wrap  text-center text-white">
                                        <div
                                            // AOS---------
                                            data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000"

                                            className="p-4 md:w-1/4 sm:w-1/2 w-full ">
                                            <div className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110  bg-blue-800">

                                                <i className="fab fa-creative-commons fw-bold text-5xl ">
                                                </i>

                                                <h2 className="
                                                title-font
                                                font-medium text-3xl
                                                text-white">
                                                    <CountUp start={0} end={covidData?.Active} duration={3} seperator="," />
                                                </h2>
                                                <p className="leading-relaxed text-white">Active</p>
                                            </div>
                                        </div>
                                        {/* ------------------------------ */}
                                        <div
                                            // AOS ----------------------
                                            data-aos="flip-right"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000"
                                            className="p-4 md:w-1/4 sm:w-1/2 w-full">

                                            <div
                                                className="border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 bg-sky-900">

                                                <i className="far text-red-600 fa-check-circle fw-bold text-5xl"></i>

                                                <h2 className="title-font font-medium text-3xl ">  <CountUp start={0} end={covidData?.Confirmed} duration={4} seperator="," /></h2>
                                                <p className="leading-relaxed">Confirmed</p>
                                            </div>
                                        </div>
                                        {/* ----------------------------------------- */}
                                        <div
                                            // AOS -------------------
                                            data-aos="flip-left"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000"
                                            className="p-4 md:w-1/4 sm:w-1/2 w-full">

                                            <div className="border-2 bg-green-500 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                                <i className="far text- bg-white-600 fa-check-circle fw-bold text-5xl"></i>

                                                <h2 className="title-font font-medium text-3xl "> <CountUp start={1111000} end={covidData?.Recovered} duration={5} seperator="," /></h2>
                                                <p className="leading-relaxed">Recovered</p>
                                            </div>
                                        </div>
                                        {/* ---------------------------------- */}
                                        <div
                                            // AOS ----------------------------
                                            data-aos="flip-right"
                                            data-aos-easing="ease-out-cubic"
                                            data-aos-duration="2000"
                                            className="p-4 md:w-1/4 sm:w-1/2 w-full">

                                            <div className="border-2 bg-rose-700 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                                <i className="fas fa-skull-crossbones font-bold text-5xl"></i>

                                                <h2 className="title-font font-medium text-3xl ">   <CountUp start={155550} end={covidData?.Deaths} duration={6} seperator="," /></h2>
                                                <p className="leading-relaxed">Deaths</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className=' text-center py-7 text-purple-700'>COVID-19 Chart</h3>
                                    <Chart covidData={covidData} />
                                </div>
                            </section>

                        </div>

                }


            </div >
        </div>
    );
};

export default CovidCard;
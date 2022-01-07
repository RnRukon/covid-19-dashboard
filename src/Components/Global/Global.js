import React from 'react';
import CountUp from 'react-countup';
import GlobalChart from '../Chart/GlobalChart';
const Global = ({ GlobalData }) => {



    return (
        <section>
            <div className=' text-center py-4'>
                <h2 className=' decoration-stone-600 font-extrabold text-3xl'>Coronavirus COVID19 Global</h2>
            </div>
            <div>
                <div className="text-gray-700 body-font">
                    <div className="container mx-auto">

                        <div
                            className="flex flex-wrap text-center text-white">
                            <div
                                // AOS -------------------------
                                data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="p-4 md:w-1/3 sm:w-1/2 w-full">

                                <div
                                    className="border-2 bg-fuchsia-900 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                    <i className="far text-red-600 fa-check-circle fw-bold text-5xl"></i>

                                    <h2 className="title-font  font-medium text-3xl ">
                                        <CountUp start={0} end={GlobalData?.Global?.NewConfirmed} duration={2} seperator="," />
                                    </h2>
                                    <p className="leading-relaxed">NewConfirmed</p>
                                </div>
                            </div>
                            {/* ----------------------------------- */}
                            <div
                                // AOS ---------------------------
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="p-4 md:w-1/3 sm:w-1/2 w-full">

                                <div
                                    className="border-2  bg-orange-700  border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                    <i className="fas fa-skull-crossbones font-bold text-5xl"></i>

                                    <h2 className="title-font font-medium text-3xl ">
                                        <CountUp start={0} end={GlobalData?.Global?.NewDeaths} duration={3} seperator="," />
                                    </h2>
                                    <p className="leading-relaxed">NewDeaths</p>
                                </div>
                            </div>

                            {/* ----------------------------------- */}
                            <div
                                // AOS ------------------------------
                                data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="p-4 md:w-1/3 sm:w-1/2 w-full">

                                <div
                                    className="border-2  bg-gray-700 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                    <i className="far text- bg-white-600 fa-check-circle fw-bold text-5xl"></i>

                                    <h2
                                        className="title-font font-medium text-3xl "> <CountUp start={100000} end={GlobalData?.Global?.NewRecovered} duration={4} seperator="," />
                                    </h2>
                                    <p className="leading-relaxed">NewRecovered</p>
                                </div>
                            </div>
                            {/* ---------------------------------------- */}
                            <div
                                // AOS ---------------------------------
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="p-4 md:w-1/3 sm:w-1/2 w-full">

                                <div
                                    className="border-2 bg-teal-600  border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                    <i className="far  text-pink-600 fa-check-circle fw-bold text-5xl"></i>

                                    <h2
                                        className="title-font font-medium text-3xl "> <CountUp start={0} end={GlobalData?.Global?.TotalConfirmed} duration={5} seperator="," />
                                    </h2>

                                    <p className="leading-relaxed">TotalConfirmed</p>
                                </div>
                            </div>
                            {/* ---------------------------------------- */}
                            <div
                                // AOS --------------------------------
                                data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="p-4 md:w-1/3 sm:w-1/2 w-full">

                                <div
                                    className="border-2 bg-pink-600  border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                    <i className="fas fa-skull-crossbones font-bold text-5xl"></i>

                                    <h2
                                        className="title-font font-medium text-3xl ">  <CountUp start={0} end={GlobalData?.Global?.TotalDeaths} duration={6} seperator="," />
                                    </h2>
                                    <p className="leading-relaxed">TotalDeaths</p>
                                </div>
                            </div>
                            {/* ---------------------------------------- */}
                            <div
                                // AOS ------------------------------------
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                className="p-4 md:w-1/3 sm:w-1/2 w-full">

                                <div
                                    className="border-2 bg-yellow-500  border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">

                                    <i className="far text- bg-white-600 fa-check-circle fw-bold text-5xl"></i>

                                    <h2
                                        className="title-font font-medium text-3xl ">  <CountUp start={100220} end={GlobalData?.Global?.TotalRecovered} duration={7} seperator="," />
                                    </h2>
                                    <p className="leading-relaxed">TotalRecovered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className='text-center py-7 text-purple-700'>COVID-19 Global Chart</h3>
                    <GlobalChart GlobalData={GlobalData} />
                </div>
            </div>
        </section>
    );
};

export default Global;
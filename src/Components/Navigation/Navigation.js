import React from 'react';

const Navigation = () => {
    return (
        <div className=' bg-cyan-700 py-2 fixed w-full z-50 '>
            <div className=' container'>
                <img style={{ width: '50px', display: 'inline', padding: '0 5px' }} src="https://cdn.pixabay.com/photo/2020/04/29/08/24/coronavirus-5107804_640.png" alt="" />
                <span className=' text-white font-bold'>COVID-19-Dashboard</span>
            </div>
        </div>
    );
};

export default Navigation;
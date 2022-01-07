import React from 'react';

const Footer = () => {
    return (
        <div className='py-6 bg-cyan-700'>
            <div className=' text-center text-white'>
                <small>COVID-19 &copy; Copy-Right {new Date().toLocaleDateString().slice(4, 8)}</small>
            </div>
        </div>
    );
};

export default Footer;
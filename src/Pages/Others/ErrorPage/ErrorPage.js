import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../../assets/image/error-icon-28.png.crdownload';

const ErrorPage = () => {
    return (
        <div className='text-center py-12'>
           <p className='text-red-500 text-3xl'>Opps! This Page Isn't Available</p>
           <img className='w-60 mx-auto' src={errorImg} alt="" />
           <p className='text-red-500 text-3xl'>Please go to <Link className='text-primary' to='/'>home page</Link></p>
        </div>
    );
};

export default ErrorPage;
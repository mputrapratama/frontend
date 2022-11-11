import React from 'react';
import Picture from '../images/ilustration1.png'
import { Link } from 'react-router-dom';
const Success = () => {
  return (
    <section className='relative'>
        <div className='max-w-6xl mx-auto px-4 sm:pb-20'>
                <div className='text-center pb-12 py-8 pt-20 mx-4md:mx-0'>
                    <div className='absolute top-0 -mt-10 left-1/2 transform -translate-x-1/2'>
                    <img className='relative flex items-center mt-10 ml-40' src={Picture} width='300' height='300' alt='Picture1'/>
                    <h1 className='text-3xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-5' data-aos='zoom-y-out'>Nice</h1>
                    <p className='text-xl mb-5'>We have sending you an email. check it now</p>
                    <Link className='btn text-white bg-gray-900 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0' to={'/'}>Back</Link>
                    </div>
                </div>
            </div>
                
    </section>
  )
}

export default Success
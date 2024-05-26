import React, { memo } from 'react'
import heroimg from '../../assets/images/hero-img.png'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className='w-full px-20 flex items-center justify-between bg-black'>
            <div className="hero-titles w-[461px]">
                <h1 className='w-[380px] text-[3.6rem] font-bold text-white'>Discover <br /> Most Suitable <br /> Watches</h1>
                <p className='w-[430px] text-lg mt-4'>
                    Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart
                    watches of almost all brands. So why you are waiting? Just order now!
                </p>
                <label className='w-[400px] h-[60px] mt-5 font-semibold  px-5 flex items-center justify-start gap-3 rounded-2xl bg-white'>
                    <FaSearch fontSize={24} color='blue' />
                    <input className='w-[300px] h-[40px] px-2 py-2 text-black bg-white' type="text" placeholder='Find the best brands' />
                    <button className='btn-outline px-5 py-2 rounded-md text-white bg-blue-500'>Search</button>
                </label>
            </div>
            <figure className='w-[461px] h-[581px] mr-8 flex items-center justify-center'>
                <img className='w-[450px] h-[530px] mx-auto' src={heroimg} alt="Hero image" />
            </figure>
        </section>
    )
}

export default memo(Hero)
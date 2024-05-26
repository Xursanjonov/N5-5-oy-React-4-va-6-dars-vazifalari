import React, { memo } from 'react'
import subscribeimg from '../../assets/images/subscribe.png'

const Subscribe = () => {
    return (
        <section className='subscribe w-full py-24 bg-white'>
            <div className="w-[1100px] mx-auto px-10 py-6 flex items-center justify-center gap-48 rounded-2xl bg-slate-100">
                <div className="subscribe-title">
                    <h2 className='text-4xl font-bold text-black'>Subscribe To Newsletter</h2>
                    <p className='my-2 font-semibold text-gray-500'>Get free guide about smart watches daily. </p>
                    <label className='w-[400px] h-[60px] mt-7 font-semibold  px-5 flex items-center justify-start gap-3 rounded-2xl bg-white'>
                        <input className='w-[300px] h-[40px] px-2 py-2 text-black bg-white' type="text" placeholder='Enter Email Address' />
                        <button className='btn-outline px-5 py-2 rounded-md text-white bg-blue-600'>Subscribe</button>
                    </label>
                </div>
                <figure className="subscribe-img">
                    <img className='w-[292px] h-[321px] ' src={subscribeimg} alt="Subscribe image" />
                </figure>
            </div>
        </section>
    )
}

export default memo(Subscribe)
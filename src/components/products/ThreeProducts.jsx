import React from 'react'

const ThreeProducts = ({ title, img, info }) => {
    return (
        <div className="w-[360px] h-[240px] pe-5 flex items-center justify-start shadow-md rounded-2xl bg-slate-50">
            <figure className='w-[88px] h-[150px] mx-auto'><img className='w-[86.5px] h-[150px] ' src={img} alt="Movie" /></figure>
            <div className="w-[153px] flex flex-col items-start justify-center gap-2">
                <h2 className="text-2xl font-bold text-black"> {title} </h2>
                <p className='font-semibold text-gray-500'> {info} </p>
            </div>
        </div>
    )
}

export default ThreeProducts
import React, { Fragment, useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import Layout from './layout/Layout'
import Hero from './components/hero/Hero'
import Subscribe from './components/subscribe/Subscribe'
import ThreeProducts from './components/products/ThreeProducts'
import { threeProducts } from './static'
import WatchProductItem from './components/products/watchProductItem'
import axiosUrl from './config';

import hamzaImg from './assets/images/hamza.svg'
import hafizImg from './assets/images/hafiz.svg'

// npm create vite
const App = () => {
  const [limit, setLimit] = useState(6)
  const [data, setData] = useState([])

  useEffect(() => {
    axiosUrl(`/products?limit=${limit}`).then(res =>
      setData(res.data)).catch(er => console.error(er))
  }, [data])

  return (
    <Fragment>
      <Layout>
        <main className='w-[1519px] mx-auto'>
          <Hero />
          <section className='w-full mx-auto py-20 flex items-center justify-center gap-14 bg-white'>
            {threeProducts?.map(product => <ThreeProducts key={product.id} {...product} />)}
          </section>
          <section className='w-full mx-auto py-14 px-20 flex flex-col gap-14 items-center justify-center bg-white'>
            <div className="flex flex-col items-center justify-center gap-2 text-black">
              <p className='font-semibold text-blue-600'>Find your favourite smart watch.</p>
              <h1 className='text-4xl font-bold'>Our Latest Products</h1>
            </div>
            <div className="w-full grid grid-cols-3 gap-8">
              {
                data?.map(product => (<WatchProductItem key={product.id} product={product} />))
              }
            </div>
            <button onClick={() => setLimit(p => p + 3)} type='button'
              className='w-[196px] h-[46px] text-xl flex items-center justify-center font-semibold rounded-3xl border-blue-600 text-white bg-blue-600'>
              View More
            </button>
          </section>
          <section className='w-[1519px] mx-auto py-20 flex flex-col items-center gap-2 bg-white'>
            <h4 className='text-lg font-semibold text-blue-500'>Here are our some of the best clients.</h4>
            <h1 className='text-4xl font-bold text-black'>What People Say About Us</h1>
            <div className="carusel w-[1219px] mx-auto my-12">
              <div className="carousel w-full px-12">
                <div id="item1" className="carousel-item w-full h-[250px] px-12 flex  items-center justify-center transition-all decoration-transparent gap-14">
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-contain' src={hamzaImg} />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hamza Faizi</h1>
                      <p className='w-[222px] text-sm font-semibold'>Don't waste time, just order! This is the best website to puschase smart watches.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-cover' src={hafizImg} />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hafiz Huzaifa</h1>
                      <p className='w-[222px] text-sm font-semibold'>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="item2" className="carousel-item w-full h-[250px] px-12 flex  items-center justify-center transition-all decoration-transparent gap-14">
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-cover'
                      src='https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg' />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hamza Faizi</h1>
                      <p className='w-[222px] text-sm font-semibold'>Don't waste time, just order! This is the best website to puschase smart watches.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-cover'
                      src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg' />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hafiz Huzaifa</h1>
                      <p className='w-[222px] text-sm font-semibold'>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="item3" className="carousel-item w-full h-[250px] px-12 flex  items-center justify-center transition-all decoration-transparent gap-14">
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-cover'
                      src='https://t4.ftcdn.net/jpg/05/29/06/57/360_F_529065726_40CTs58DMNuDN1OiLDEvo9JaTk6VFCQ3.webp' />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hamza Faizi</h1>
                      <p className='w-[222px] text-sm font-semibold'>Don't waste time, just order! This is the best website to puschase smart watches.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-cover'
                      src='https://static.vecteezy.com/system/resources/thumbnails/013/487/005/small_2x/confident-and-stylish-handsome-young-man-in-full-suit-keeping-arms-crossed-and-looking-at-camera-while-standing-against-white-background-photo.jpg' />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hafiz Huzaifa</h1>
                      <p className='w-[222px] text-sm font-semibold'>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
                <div id="item4" className="carousel-item w-full h-[250px] px-12 flex  items-center justify-center transition-all decoration-transparent gap-14">
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-contain' src={hamzaImg} />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hamza Faizi</h1>
                      <p className='w-[222px] text-sm font-semibold'>Don't waste time, just order! This is the best website to puschase smart watches.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                  <div className='w-[525px] h-[230px] p-12 flex items-center justify-around gap-8 rounded-2xl bg-gray-100'>
                    <img className='w-[162px] h-[179px] rounded-2xl object-cover' src={hafizImg} />
                    <div className="hamza-title w-[360px] flex flex-col items-start justify-center gap-1">
                      <h1 className='text-2xl font-bold text-black'>Hafiz Huzaifa</h1>
                      <p className='w-[222px] text-sm font-semibold'>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                      <div className="mt-3 flex items-center justify-start gap-1 text-lg text-black">
                        <FaStar /> <FaStar />
                        <FaStar /> <FaStar /> <FaStar />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5 py-2 gap-2 flex justify-center">
                <a href="#item1" className="w-[20px] h-[20px] rounded-full bg-gray-300"></a>
                <a href="#item2" className="w-[20px] h-[20px] rounded-full bg-gray-300"></a>
                <a href="#item3" className="w-[20px] h-[20px] rounded-full bg-gray-300"></a>
                <a href="#item4" className="w-[20px] h-[20px] rounded-full bg-blue-600"></a>
              </div>
            </div>
          </section>
          <Subscribe />
        </main>
      </Layout>
    </Fragment>
  )
}

export default App
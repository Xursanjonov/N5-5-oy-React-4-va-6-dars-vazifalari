import React from 'react'

const WatchProductItem = ({ product }) => {
    return (
        <div className='w-[350px] h-[450px] mx-auto flex flex-col items-center justify-center'>
            <figure className='w-[350px] h-[334px] mx-auto'>
                <img className='w-[348px] h-[334px] bg-white p-5 mx-auto rounded-t-2xl object-contain' src={product.image} alt={product.title} />
            </figure>
            <div className='w-full mb-4 flex-1 text-center rounded-b-2xl'>
                <h2 className='text-xl my-2 font-bold text-black'>{product.category}</h2>
                <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-black" />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-black" checked />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-black" />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-black" />
                    <input type="radio" name="rating-1" className="mask mask-star-2 bg-black" />
                </div>
                <div className="text-xl font-semibold flex items-center justify-center gap-3">
                    <s className='text-gray-400'>$290.00</s>
                    <p className='text-black'>${product.price}</p>
                </div>
            </div>
        </div>
    )
}

export default WatchProductItem
import React, { useState } from 'react'

const Index = ({ count, handleDecrease, handleIncrease, handleTotal }) => {



	return (
		<section className='w-full p-5 md:w-1/2 md:pl-[4rem] md:mt-[9.45rem]'>
			<div className="flex flex-col">
				<p className='text-orange text-[.85rem] tracking-widest font-medium'>SNEAKER COMPANY</p>
				<p className='text-custom-size tracking-[0.05rem] leading-[3rem] font-bold mt-[1rem]'>Fall Limited Edition Sneakers</p>
				<p className='text-dark-grayish-blue font-light text-[1.01rem] leading-[1.6rem] tracking-[.002rem] mt-[1.5rem] md:mt-[2.2rem]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
				<div className="w-full md:w-[180px] flex flex-wrap md:justify-normal justify-between items-center mt-[1.3rem]">
					<div className="flex md:w-full items-center">
						<span className='text-[1.75rem] tracking-[.07rem] font-bold'>$125.00</span>
						<span className='min-w-[50px] flex justify-center items-center ml-[1rem] bg-pale-orange text-orange tracking-wide rounded-md h-[26px] font-medium'>50%</span>
					</div>
					<del className='text-grayish-blue'>
						<span className='text-grayish-blue font-bold'>$250.00</span>
					</del>
				</div>
				<div className="w-full flex justify-between items-center mt-[2.1rem] md:flex-row flex-col md:gap-0 gap-5">
					<div className="flex justify-center items-center w-full md:w-[157px] h-[56px] rounded-[.7rem] bg-light-grayish-blue">
						<button type='button' onClick={() => handleDecrease()} className='w-[52px] h-[56px] flex justify-center items-center pr-[.7rem] hover:opacity-75 transition-opacity'>
							<svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" /></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a" /></svg>
						</button>
						<span className='w-[52px] h-[56px] flex justify-center items-center font-bold'>{count}</span>
						<button type='button' onClick={() => handleIncrease()} className='w-[52px] h-[56px] flex justify-center items-center pl-[.7rem] hover:opacity-75 transition-opacity'>
							<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" /></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b" /></svg>
						</button>
					</div>
					<button
						type='button'
						onClick={() => {
							handleTotal(count)
						}}
						className='w-full md:w-[272px] h-[56px] rounded-[.6rem] md:ml-[.9rem] flex justify-center items-center gap-4 bg-orange text-white shadow-[0_20px_50px_-15px_#ff7d1a80] transition-all hover:opacity-75'>
						<i>
							<svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#fff" fill-rule="nonzero" /></svg>
						</i>
						<span>Add to cart</span>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Index
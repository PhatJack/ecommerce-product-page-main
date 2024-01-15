import React from 'react'

const MobileMenu = ({ menu, mobile, setMobile }) => {
	return (
		<>
			<div className={`block md:hidden fixed w-3/4 h-screen bg-white top-0 left-0 ${mobile ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-[2]`}>
				<div className="w-full h-full flex flex-col gap-20 py-10 px-7">
					<button type='button' onClick={() => setMobile(false)} className="w-full">
						<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" /></svg>
					</button>
					<ul className='flex flex-col gap-8 text-dark-grayish-blue'>
						{
							menu.map((item, index) => (
								<li key={index} className='relative w-full group'>
									<span key={index} className='cursor-pointer text-lg text-black font-bold' >
										{item}
									</span>
								</li>
							))
						}
					</ul>
				</div>
			</div>
			{
				mobile && (
					<div className="fixed w-full inset-0 h-screen z-[1] bg-black/10">
					</div>
				)
			}
		</>


	)
}

export default MobileMenu
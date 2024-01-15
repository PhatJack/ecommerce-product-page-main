import React, { useEffect, useRef, useState } from 'react'
import { Product1, Product2, Product3, Product4, ProductThumbNail1, ProductThumbNail2, ProductThumbNail3, ProductThumbNail4 } from '../../../images'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import './index.css'
const Index = () => {
	register()
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	const nav = useRef(false)
	const viewport = () => {
		if (window.innerWidth < 768) {
			nav.current = true
		} else {
			nav.current = false
		}
	}
	useEffect(() => {
		viewport()
		window.addEventListener('resize', viewport)
		return () => {
			window.removeEventListener('resize', viewport)
		}
	}, [])
	const modules = [FreeMode, Navigation, Thumbs]
	console.log(nav)
	return (
		<section className='w-full md:max-w-[445px] md:w-1/2 h-fit md:mt-[5.65rem] relative z-[9]'>
			<Swiper
				style={{
					'--swiper-navigation-color': '#000',
					'--swiper-pagination-color': '#000',
				}}
				loop={true}
				spaceBetween={5}
				navigation={nav.current}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={modules}
				className="mySwiper2">
				<SwiperSlide>
					<img src={Product1} alt="" className='w-full md:rounded-[.9rem]' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Product2} alt="" className='w-full md:rounded-[.9rem]' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Product3} alt="" className='w-full md:rounded-[.9rem]' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Product4} alt="" className='w-full md:rounded-[.9rem]' />
				</SwiperSlide>
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={31}
				slidesPerView={4}
				freeMode={true}
				modules={modules}
				watchSlidesProgress={true}
				className='hidden mt-[1.7rem] mySwiper md:flex'
			>
				<SwiperSlide className='hover:opacity-50 transition-opacity cursor-pointer'>
					<img src={ProductThumbNail1} alt="" className='w-full rounded-[.6rem] max-w-[88px] h-[88px]' />
				</SwiperSlide>
				<SwiperSlide className='hover:opacity-50 transition-opacity cursor-pointer'>
					<img src={ProductThumbNail2} alt="" className='w-full rounded-[.6rem] max-w-[88px] h-[88px]' />
				</SwiperSlide>
				<SwiperSlide className='hover:opacity-50 transition-opacity cursor-pointer'>
					<img src={ProductThumbNail3} alt="" className='w-full rounded-[.6rem] max-w-[88px] h-[88px]' />
				</SwiperSlide>
				<SwiperSlide className='hover:opacity-50 transition-opacity cursor-pointer'>
					<img src={ProductThumbNail4} alt="" className='w-full rounded-[.6rem] max-w-[88px] h-[88px]' />
				</SwiperSlide>
			</Swiper>
		</section >
	)
}

export default Index
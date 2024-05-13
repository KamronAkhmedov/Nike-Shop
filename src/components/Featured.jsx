// import Swiper styles
import 'swiper/css';
import { FEATURED } from '../constants';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'
import { motion } from 'framer-motion'
import Fadein from './Fadein'

const Featured = () => {
  return (
    <section className="max-pad-container py-16 xl:py-32" id="featured">
      <div className="max-w-[90%] mx-auto">

        <motion.div
          variants={Fadein('right', 1)}
          initial='hidden'
          whileInView={'show'}
          exit={'hidden'}
          className="flex justify-end items-end pt-12">
          <h4 className="text-4xl leading-none font-ace flex flex-col items-end">
            Discover
            <span className="medium-16">New</span>
          </h4>
        </motion.div>

        <motion.div
          variants={Fadein('left', 1)}
          initial='hidden'
          whileInView={'show'}
          exit={'hidden'}
        >
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className='h-[441px] mt-10'
          >
            {
              FEATURED.map((item, i) => (
                <SwiperSlide key={i}>
                  <div style={{ backgroundColor: item.bgColor }} className='py-6 px-10 rounded-xl'>
                    <div className='flex items-end justify-end text-white bold-24'>
                      0{i + 1}
                    </div>

                    <div className='mb-8 flexCenter'>
                      <img
                        src={item.shoe}
                        alt={item.title}
                        className='w-[22rem] h-auto '
                      />
                    </div>

                    <div className='flexBetween'>
                      <div className='text-white'>
                        <h4 className='medium-15 capitalize whitespace-nowrap'>{item.title}</h4>
                        <span className='medium-20'><span className='regular-14'>$</span>{item.price}</span>
                      </div>

                      <a href="/" className='text-white text-center bg-black/10 flexCenter rounded-full regular-32 h-12 w-12 pb-1 '>+</a>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </motion.div>

      </div>
    </section>
  )
}

export default Featured
import { useState } from 'react'
import { shoe1 } from '.'
import { Shoes } from '../constants'
import Button from './Button'
import ShoeCard from './ShoeCard'
import { motion } from 'framer-motion'
import Fadein from './Fadein'

const Hero = () => {

  const [shoeImg, setShoeImg] = useState(shoe1)

  return (
    <section className='max-pad-container xl:h-screen py-16 xl:py-32 max-xs:overflow-hidden' id='home'>
      <div className='flex flex-col gap-6 xl:flex-row relative top-28 xl:top-36'>
        {/* left */}
        <motion.div
          variants={Fadein('left', 1)}
          initial='hidden'
          whileInView={'show'}
          exit={'hidden'}
          className='flex flex-1 flex-col max-w-[666px]'>
          <h4 className='uppercase text-secondary medium-18'>MODERN COLLECTION</h4>
          <h2 className='h1 uppercase'>2024 COLLECTION FOR GENTS</h2>
          <p className='border-l-4 border-secondary pl-3 my-2'>
            Elevate your every step with Nike. From the streets to the track, our sneakers empower your journey. Discover the fusion of style and performance. Welcome to the world where every stride defines your path
          </p>
          <div className='mt-4 z-10'>
            <Button
              type='submit'
              title={'Start Shopping'}
              icon={'/assets/icons/arrow-right.svg'}
              variant={'btn-secondary'}
            />
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{
            scale: 0.2
          }}
          whileInView={{
            scale: 1,
          }}
          transition={{
            type: 'tween',
            duration: 1,
            ease: 'easeInOut'
          }}
          className='flex justify-center flex-1'>
          <img src={shoeImg} alt="shoe img" className='h-[20rem] xl:h-[27rem] w-auto drop-shadow-2xl' />
        </motion.div>
      </div>

      <motion.div
        variants={Fadein('right', 1)}
        initial='hidden'
        whileInView='show'
        exit='hidden'
        className='relative'>
        <div className='flexBetween gap-x-4 w-full relative top-24  bg-primary/50 z-5'>
          {Shoes.map((item, i) => (
            <div key={i}>
              <ShoeCard
                imgUrl={item}
                changeShoeImage={(item) => setShoeImg(item)}
                shoeImg={shoeImg}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
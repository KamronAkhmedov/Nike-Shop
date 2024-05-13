import { about, product1, product2 } from '.'
import AboutCard from './AboutCard'
import AboutStats from './AboutStats'
import Button from './Button'
import { motion } from 'framer-motion'
import Fadein from './Fadein'

const About = () => {
  return (
    <section className='max-pad-container pb-16 xl:pb-32 ' id='about'>

      <div className='flexBetween'>
        <h4 className='text-4xl leading-none font-ace flex flex-col items-end pb-12'>
          About
          <span className='medium-15'>us</span>
        </h4>
      </div>

      <div className='flex flex-col xl:flex-row gap-10'>
        <motion.div
          variants={Fadein('right', 1)}
          initial='hidden'
          whileInView={'show'}
          exit={'hidden'}
          className='flex flex-1'
        >
          <img src={about} alt="about.png" className='rounded-3xl' />
        </motion.div>

        <motion.div
          variants={Fadein('left', 1)}
          initial='hidden'
          whileInView={'show'}
          exit={'hidden'}
          className='flex flex-1'
        >
          <div>
            <div className='flex flex-col xl:flex-row gap-5'>
              <AboutCard shoeImg={product1} containerStyles={'bg-secondaryGreen'} />
              <AboutCard shoeImg={product2} containerStyles={'bg-secondaryBlue'} />
            </div>
            <div className='mt-6'>
              <h4 className='medium-28 !font-bold'>
                Unveiling Our Journey Crafting The Ultimate Shopping Experience
              </h4>
              <div>
                <AboutStats />
              </div>
              <div className='flexCenter gap-4 mt-10'>
                <div>
                  <Button
                    type={'submit'}
                    title={'Start Shopping'}
                    icon={'/assets/icons/arrow-right.svg'}
                    variant={'btn-dark w-48 !px-2'}
                  />
                </div>
                <p className='hidden xs:flex'>Unlock your potential with Nike. Step into greatness with our cutting-edge sneakers engineered for performance and style</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section >
  )
}

export default About
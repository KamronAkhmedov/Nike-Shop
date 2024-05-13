import { SHOP } from "../constants"
import Button from "./Button"
import { motion } from 'framer-motion'
import Fadein from "./Fadein"

const Shop = () => {
  return (
    <section className="max-pad-container pb-16 xl:pb-32 pt-14" id="shop">
      <motion.div
        variants={Fadein('right', 1)}
        initial='hidden'
        whileInView={'show'}
        exit={'hidden'}
        className="flexBetween">
        <h4 className="text-4xl leading-none font-ace flex flex-col items-end pb-12">
          Popular
          <span className="medium-16">Collection</span>
        </h4>
        <a href="/" className='relative bottom-7'>
          <img src="/assets/icons/filter.svg" width={35} />
        </a>
      </motion.div>

      <motion.div
        variants={Fadein('left', 1)}
        initial='hidden'
        whileInView={'show'}
        exit={'hidden'}
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {SHOP.map((item, i) => (
          <div key={i}>
            <div className="overflow-hidden rounded-3xl group">
              <div className="overflow-hidden relative">
                <img
                  src={item.shoe}
                  alt={item.title}
                  className="w-[35rem] h-auto rounded-3xl group-hover:scale-105 transition-all duration-500"
                />
                <h4 className="medium-16 capitalize absolute top-3 left-6">
                  {item.title}
                </h4>
                <div className="flexBetween justify-center gap-x-4 w-full px-6 py-2 absolute bottom-2">
                  <span className="medium-20">
                    <span className="regular-14">$</span>
                    {item.price}
                  </span>

                  <Button
                    type={'submit'}
                    title={'Add to cart'}
                    icon={'/assets/images/opencartwhite.svg'}
                    variant={'btn-secondary !py-2 text-xs'}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Shop
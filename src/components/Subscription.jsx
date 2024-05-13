import Button from "./Button"
import { motion } from 'framer-motion'
import Fadein from "./Fadein"

const Subscription = () => {
  return (
    <div className="pt-20" id="contact">
      <div

        className="max-pad-container flexCenter flex-col lg:flex-row gap-8 py-8 bg-tertiary">
        <motion.h3
          variants={Fadein('right', 1)}
          initial='hidden'
          whileInView={'show'}
          exit={'hidden'}
          className="medium-32 leading-none font-ace text-primary">
          Get Latest Updates
        </motion.h3>
        <motion.div
          variants={Fadein('left', 1)}
          initial='hidden'
          whileInView={'show'}
          exit={'hidden'}
          className="flexBetween bg-white px-1 py-1 rounded-full">
          <input
            type="email"
            placeholder="Type your email"
            className="pl-4 border-none outline-none w-56 xl:w-80 bg-transparent"
          />
          <Button
            type={'submit'}
            title={'Subscribe'}
            variant={'btn-dark'}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Subscription
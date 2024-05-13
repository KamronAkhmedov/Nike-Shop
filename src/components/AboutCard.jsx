import Button from './Button'

const AboutCard = ({ shoeImg, containerStyles }) => {
  return (
    <div className={`${containerStyles} flexBetween text-primary rounded-2xl p-3 shadow-sm`}>
      <div className='pl-2'>
        <h4 className='medium-16'>Nike Neon</h4>
        <h5 className='font-semibold'>$99.00</h5>
        <Button
          type={'submit'}
          title={'Add to'}
          icon={'/assets/images/opencart.svg'}
          variant={'btn-white !py-1 !px-3 text-xs mt-3'}
        />
      </div>

      <div>
        <img src={shoeImg} alt="img" className='rounded-xl w-24 h-24' />
      </div>
    </div>
  )
}

export default AboutCard
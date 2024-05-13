const Fadein = (direction, duration) => ({
  hidden: {
    opacity: 0,
    ...(direction === 'up' || direction === 'down') ? { y: direction === 'up' ? 100 : -100 } : { y: 0 },
    ...(direction === 'right' || direction === 'left') ? { x: direction === 'left' ? 100 : -100 } : { x: 0 }
  },

  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: duration,
      ease: 'easeInOut'
    }
  }
})

export default Fadein
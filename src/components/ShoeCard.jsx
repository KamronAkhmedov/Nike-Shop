const ShoeCard = ({ imgUrl, changeShoeImage, shoeImg }) => {
  const handleClick = () => {
    if (shoeImg !== imgUrl.shoe) {
      changeShoeImage(imgUrl.shoe)
    }
  }

  return (
    <div onClick={handleClick}>
      <div className="flex flex-col gap-4 md:flex-row cursor-default p-8">
        <div className="h-16 w-16">
          <img src={imgUrl.thumbnail} alt="shoe image" />
        </div>
        <div>
          <h4 className="uppercase medium-14 mt-1">{imgUrl.title}</h4>
          <h4 className="medium-20 text-secondary mt-1">{imgUrl.price}</h4>
        </div>
      </div>
    </div>
  )
}

export default ShoeCard

const Header = () => {
  return (
    <header className="flexBetween px-6 lg:px-20  py-3 w-full bg-primary fixed top-0  z-30 ">
      <a href="/" className="bold-24 text-secondary font-ace">
        NIKE
      </a>
      <div className="flexBetween gap-x-4">

        <div className="hidden xs:flexBetween bg-white py-2 px-3 rounded-full z-34">
          <input type="text" placeholder="Search..." className="border-none outline-none w-44 hover:w-52 transition-all duration-200 " />
          <div className="bg-white">
            <img src="/assets/icons/search.svg" alt="search" width={18} height={18} />
          </div>
        </div>

        <div>
          <a href="/" className="flexBetween gap-x-1 text-white bg-secondary px-3 py-2 rounded-full w-10 hover:w-20 transition-all duration-300 z-45 group">
            <span className="regular-16 hidden group-hover:flex">Cart</span>
            <img src="/assets/icons/shopCart.svg" alt="shopCart" width={24} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
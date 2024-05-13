
const Button = ({ type, title, icon, variant }) => {
  return (
    <button className={`flexCenter gap-2 border rounded-full cursor-pointer ${variant}`} type={type}>
      <label className="cursor-pointer">{title}</label>
      {icon && <img src={icon} alt={title} height={20} width={20} />}
    </button>
  )
}


export default Button
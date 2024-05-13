import { footer } from "."
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../constants"

const Footer = () => {
  return (
    <footer className="max-pad-container flexCenter pb-14 pt-20 bg-pattern bg-cover bg-no-repeat" id="contact">
      <div className="flex flex-col">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row p-8 rounded-t-xl">
          <div className='flex flex-wrap gap-16 sm:justify-between  md:flex-1'>
            <div className="max-w-60">
              <a href="/" className="bold-24 text-secondary font-ace ">NIKE</a>
              <div>
                <p className="mt-3">Step into style. Run with purpose. Nike: Where every stride tells a story</p>
                <img
                  src={footer}
                  alt="footer img"
                  className="rounded-md mt-6 w-44 shadow-md"
                />
              </div>
            </div>

            {FOOTER_LINKS.map((item) => (
              <FooterColumn key={item.title} title={item.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20">
                  {item.links.map(link => (
                    <a href="/" key={link} className="hover:text-tertiary">
                      {link}
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, i) => (
                  <a href="/" key={i} className="flex gap-4 md:flex-col lg:flex-row text-gray-20">
                    <p>{link.label}:</p><p className="bold-15">{link.value}</p>
                  </a>
                ))}
              </FooterColumn>
            </div>

            <div className="flex">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4 ">
                  {SOCIALS.links.map((link) => (
                    <a href="/" key={link} >
                      <img src={link} alt="social icon" width={25} />
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <p className="font-ace text-white  bg-tertiary medium-14 py-2 px-8 rounded-b-xl flexBetween">
          <span className="font-ace">2024 NIKE</span>
          All rights reserved
        </p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer
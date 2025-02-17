import { footer } from "../constraints/constraint"


const Footer = () => {
  return (
    <div className="w-full bg-lightdawn/10 flex justify-around items-center gap-4 py-2 font-sans mt-4">
        <p className="text-title/60 select-none">
            {footer.copyright}
        </p>
        <div className="flex gap-2 xs:gap-4">
            {footer.socials.map((social)=>(
                <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.id}>
                    <img src={social.icon} alt="logo" className="w-[24px] h-[24px]"/>
                </a>
            ))}
        </div>
    </div>
  )
}

export default Footer
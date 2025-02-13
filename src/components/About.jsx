import { about } from "../constraints/constraint"
import Button from "./Button"
import { useMediaQuery } from '@mui/material';


const About = () => {
    // a boolean variable which check if the screen is md size and above
    // if it is, the value of the variable is true else it is false
    const isDesktop =useMediaQuery('(min-width: 768px)');
    
  return (
    <div id="about" className="contain flex flex-col justify-center items-center gap-4 py-10 md:flex-row lg:gap-6">
        <div className="flex justify-center items-center mb-4 p-4 md:w-1/2">
            <img src={about.img} alt="profile" className="w-[250px] h-[250px]  md:w-[360px] md:h-[360px] rounded-full border-lightdawn border-2 shadow- shadow-lightdawn inset-1" />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
            <Button swit={true} className={`px-4 font-bold`}>
                {about.icon}
            </Button>
            <h1 className="text-title font-bold text-2xl break-words pr-[20%] lg:text-3xl xl:text-4xl">
                {
                    about.name
                }
            </h1>
            <div className="flex flex-col gap-4 md:gap-0">
                {/*  if the screen is md size and above, display the desktop array
                // else display the mobile array */}
                {
                    isDesktop ? about.desktop.map((item,index)=>(
                        <p key={index} className={`text-title/50 ${index === 0 || index ===3 ? 'pb-4':''}`}>
                            {item.desc}
                        </p>
                    )) : about.mobile.map((item,index)=>(
                        <p key={index} className="text-title/50">
                            {item.text}
                        </p>
                    ))
                }    
            </div>
        </div>
    </div>
  )
}

export default About
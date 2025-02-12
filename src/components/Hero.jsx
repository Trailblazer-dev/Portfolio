import Button from "./Button";
import { heroSection } from "../constraints/constraint";
import whatapp from "../assets/WhatsappLogo.png";
import { ArrowDownToLineIcon } from "lucide-react";
import FigmaIcon from "../assets/icons/Figma.png";
import ReactIcon from "../assets/icons/react.png";
import TypescriptIcon from "../assets/icons/typescript.png";

const Hero = () => {
  return (
    <div className="mt-[4rem] mx-4 flex flex-col md:flex-row items-center justify-center md:gap-4 md:justify-between md:mt-[6rem] md:mx-10">
      <div className="flex flex-col flex-wrap mb-4 md:w-3/10">
        <Button className="mb-4">{heroSection.caption}</Button>
        <h1 className="text-title font-bold text-4xl md:break-words md:text-6xl ">
          {heroSection.title}
        </h1>
        <p className="text-title/50 flex mb-4">{heroSection.subtitle}</p>
        <div className="flex items-center gap-4 mb-4">
          {heroSection.icons.map((icon) => (
            <div className="hover:animate-bounce" key={icon.id}>
              <a href={icon.url} className="" target="_blank" rel="noopener noreferrer">
                <img src={icon.icon} alt={icon.alt} width={24} height={24} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="border-lightdawn/10 relative flex items-center -z-10  justify-center mb-6 md:w-2/5 md:mt-10">
        <div className="bg-lightdawn/15 absolute w-[180px] h-[180px] rounded-full  blur-sm -top-3 shadow-md shadow-lightdawn md:w-[200px] md:h-[200px] md:-top-[3vh]"></div>
        <div className="mx-auto z-0 md:mx-0">
          <img
            src={heroSection.Image}
            alt="image"
            className="w-[160px]  md:w-[ 220px] md:h-[220px] rounded-full"
            />
        </div>
        <div className="absolute z-10 -left-6 bottom-23 bg-[#090E16] rounded-full md:left-[4vw]">
          <img
            src={FigmaIcon}
            alt="logo"
            className="p-1.5 w-[24px] h-[24px]"
          />
        </div>
        <div className="absolute z-10 -left-6 top-10 bg-[#090E16] rounded-full md:left-[4vw] xmd:left-[0vw]">
          <img
            src={ReactIcon}
            alt="logo"
            className="p-1.5 w-[24px] h-[24px]"
          />
        </div>
        <div className="absolute z-10 -right-7 top-18 bg-[#090E16] rounded-full md:right-[4vw]">
            <img
              src={TypescriptIcon}
              alt="logo"
              className="p-1.5 w-[24px] h-[24px]"
            />
        </div>
      </div>
      <div className="flex gap-4 flex-wrap md:w-3/10 md:items-end">
        <div className="relative bg-none group">
            <a href="/CV.pdf" download="CV.pdf">
                <Button className="flex  gap-2 shadow-md shadow-lightdawn/20 hover:animate-bounce hover:border-1 hover:border-lightdawn/10 hover:shadow-sm select-none" swit={false}>
                  {heroSection.button1}
                
                  <ArrowDownToLineIcon size={24} className=""/>
                </Button>
            </a>
            <div className="absolute border-1 border-title/20 w-full bottom-0 rounded-full hidden group-hover:block"></div>
        </div>
        <a href="https://wa.me/+254111250188?text=Hello%20I%20would%20like%20to%20contact%20you" target="_blank" rel="noopener noreferrer" >
            <Button className="flex outline-2 outline-lightdawn/10 gap-4 shadow-md shadow-lightdawn/20 hover:animate-pulse hover:bg-lightdawn/10 md:gap-6 md:px-4">
              <img src={whatapp} alt="logo" width={24} height={24} />
              {heroSection.button2}
            </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

import Button from "./Button";
import { ExperienceSection, ExperienceSection2, heroSection } from "../constraints/constraint";
import whatapp from "../assets/WhatsappLogo.png";
import { ArrowDownToLineIcon } from "lucide-react";
import FigmaIcon from "../assets/icons/Figma.png";
import ReactIcon from "../assets/icons/react.png";
import TypescriptIcon from "../assets/icons/typescript.png";

const Hero = () => {
  return (
    <>
    <div className="contain mt-[4rem] flex flex-col md:flex-row items-center justify-center md:gap-4 md:justify-between md:mt-[6rem]" id="hero" >
      <div className="flex flex-col flex-wrap mb-4 md:w-3/10 md:justify-start" >
        <Button className="mb-4 md:text-lg select-none">{heroSection.caption}</Button>
        <h1 className="text-title font-bold text-4xl md:break-words md:text-6xl md:mb-4 select-none">
          {heroSection.title}
        </h1>
        <p className="text-title/50 flex mb-4 md:textlg select-none">{heroSection.subtitle}</p>
        <div className="flex items-center gap-4 mb-4">
          {heroSection.icons.map((icon) => (
            <div className="hover:animate-bounce" key={icon.id}>
              <a href={icon.url} className="" target="_blank" rel="noopener noreferrer">
                <img src={icon.icon} alt={icon.alt} className="w-[24px] md:w-[32px]" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="border-lightdawn/10 relative flex items-center -z-10  justify-center mb-6 md:w-2/5 md:mt-10">
        <div className="bg-lightdawn/30 absolute w-[180px] h-[180px] rounded-full  blur-sm -top-3 shadow-md shadow-lightdawn md:w-[200px] md:h-[200px] md:-top-[3vh] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px]"></div>
        <div className="mx-auto z-0 md:mx-0">
          <img
            src={heroSection.Image}
            alt="image"
            className="w-[160px]  md:w-[ 220px] md:h-[220px] lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px]"
            />
        </div>
        <div className="absolute z-10 -left-6 bottom-23 bg-[#090E16] rounded-full md:left-[3vw] tablet:left-[6vw] lg:left-[3vw]  xl:left-[5vw] flex justify-center items-center">
          <img
            src={FigmaIcon}
            alt="logo"
            className="p-1.5 w-[24px] h-[24px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px]"
          />
        </div>
        <div className="absolute z-10 -left-6 top-10 bg-[#090E16] rounded-full md:left-[3vw] md:top-6 tablet:left-[6vw] lg:left-[4vw]  xl:left-[6vw]  flex justify-center items-center">
          <img
            src={ReactIcon}
            alt="logo"
            className="p-1.5 w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
          />
        </div>
        <div className="absolute z-10 -right-7 top-18 bg-[#090E16] rounded-full md:right-[3vw] tablet:right-[5vw] lg:right-[3vw] lg:top-28  xl:right-[5vw] xl:top-34 flex justify-center items-center">
            <img
              src={TypescriptIcon}
              alt="logo"
              className="p-1.5 w-[24px] h-[24px] md:w-[30px] md:h-[30px]"
            />
        </div>
      </div>
      <div className="flex gap-4 flex-wrap md:w-3/10 md:items-end md:justify-end md:gap-6">
        <div className="relative bg-none group">
            <a href="/CV.pdf" download="CV.pdf">
                <Button className="flex  gap-2 shadow-md shadow-lightdawn/20 hover:animate-bounce hover:border-1 hover:border-lightdawn/10 hover:shadow-sm select-none md:text-lg lg:text-2xl" swit={false}>
                  {heroSection.button1}
                
                  <ArrowDownToLineIcon  className="w-[24px] lg:w-[32px]"/>
                </Button>
            </a>
            <div className="absolute border-1 border-title/20 w-full bottom-0 rounded-full hidden group-hover:block"></div>
        </div>
        <a href="https://wa.me/+254111250188?text=Hello%20I%20would%20like%20to%20contact%20you" target="_blank" rel="noopener noreferrer" >
            <Button className="flex outline-2 outline-lightdawn/10 gap-4 shadow-md shadow-lightdawn/20 hover:animate-pulse hover:bg-lightdawn/10 md:gap-6 md:px-4 md:text-lg lg:text-2xl">
              <img src={whatapp} alt="logo" className="w-[24px] lg:w-[32px]" />
              {heroSection.button2}
            </Button>
        </a>
      </div>
    </div>
    <div className="contain pb-4 mt-14  md:border-y md:border-lightdawn/10 md:py-8">
      <div className="flex flex-col gap-8 justify-center items-center  md:flex-row  lg:gap-12">
        {ExperienceSection.map((item,index)=>(
          <div className="flex flex-col justify-center items-center border-2 border-lightdawn/50 w-[250px] h-[180px] rounded-2xl even:border-none even:bg-lightdawn/10 hover:shadow-md hover:shadow-title/20 hover:cursor-pointer" key={index}>
            <div className="flex items-center justify-center ">
              <img src={item.icon} alt="icon" className="w-[64px] " />
            </div>
            <p className=" text-title select-none">
              {item.years}
            </p>
            <h2 className="text-title font-semibold text-xl select-none">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
      <div className="hidden md:flex justify-around items-center bg-lightdawn/10 mt-8 px-6 py-2.5 w-fit mx-auto rounded-xl gap-12 lg:gap-20">
        {ExperienceSection2.map((item,index)=>(
          <div className="flex flex-col items-center justify-center text-lightdawn tablet:px-4 lg:px-6 select-none" key={index}>
            <p className="">
              {item.subtitle}
            </p>
            <h2 className="text-3xl font-semibold select-none">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Hero;

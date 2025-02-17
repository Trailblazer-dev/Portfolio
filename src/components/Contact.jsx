import { contact } from "../constraints/constraint";
import Button from "./Button";
import whatapp from "../assets/WhatsappLogo.png";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

const Contact = () => {
const [copySuccess, setCopySuccess] = useState('');

const copyToClipboard = () => {
    navigator.clipboard.writeText(contact.email.text);
    setCopySuccess('copied');
    setTimeout(() => {
        setCopySuccess('');
    }, 2000);
};

return (
    <div id="contact" className="contain flex flex-col justify-center items-center gap-2">
        <div className="mb-4 flex flex-col justify-center items-center">
            <Button swit={true} className={`px-4 mb-4`}>
                {contact.icon}
            </Button>
            <h1 className="head select-none cursor-pointer">{contact.title}</h1>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center sm:flex-row  sm:gap-6 my-4">
            <Button className="flex outline-2 outline-lightdawn/10 gap-4 shadow-md shadow-lightdawn/20 hover:animate-pulse hover:bg-lightdawn/10 md:gap-6 md:px-4 md:text-lg lg:text-2xl">
                <img src={whatapp} alt="logo" className="w-[24px] lg:w-[32px]" />
                {contact.whatapp}
            </Button>
            <div className="flex flex-col justify-center items-center gap-2 xs:flex-row">
                <img
                    src={contact.email.icon}
                    alt="logo"
                    className="w-[24px] lg:w-[32px]"
                />
                <a
                    href={`mailto:${contact.email.url}`}
                    className="text-lightdawn/50 hover:underline"
                >
                    {contact.email.text}
                </a>
                <button
                    onClick={copyToClipboard}
                    className="ml-2 cursor-pointer hover:animate-bounce"
                >
                    <img src={contact.email.copyicon} alt="copy icon" className="w-[24px] lg:w-[32px]" />
                </button>
                {copySuccess && <span className="text-title ml-2">{copySuccess}</span>}
            </div>
        </div>
        <a href="#hero" className="flex gap-2 text-title hover:animate-bounce">Back to Top <ArrowUp /></a>
    </div>
);
};

export default Contact;

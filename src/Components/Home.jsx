import React from "react";
import { MdWavingHand } from "react-icons/md";
import { FaDownload, FaGithubSquare, FaInstagram, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import Typewriter from "./Typewriter";
import profileImage from "../assets/profile.jpeg";
import resume from "../assets/shifa_cv.pdf";
function Home() {
  return (
    <div className="bg-[#A9A9A9] h-screen flex justify-center items-center">
        <div className="bg-white h-[90%] w-[95%] rounded-[20px] relative flex justify-center items-center">
            <div className="w-[50%] pl-30">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                    Hai !!! I am SHIFA <MdWavingHand className="text-yellow-300" />
                </h2>
                <Typewriter />
                <p>
                    Creative and driven software developer with expertise in building
                    dynamic web applications and delivering high-quality solutions.
                </p>
                <a href={resume} download className="border-2 w-[38%] my-4 px-4 py-2 flex items-center gap-2 font-semibold rounded-[30px]">Download CV <FaDownload size={15}/></a>
            </div>
            <div className="relative flex justify-center items-center">
                <div className="border-6 border-[#D6D3D1] absolute w-[280px] h-[380px] absolute right-41 top-9 z-0"></div>
                <img src={profileImage} className="w-[45%] min-h-[400px] z-10" alt="Profile pic" />
            </div>
            <div className="absolute right-34">
                <a href="https://github.com/shifashahad" target="_blank"><FaGithubSquare size={20}/></a>
                <a href="https://www.linkedin.com/in/shifashahad/" target="_blank"><FaLinkedin className="my-4" size={20}/></a>
                <a href="" target="_blank"><FaInstagramSquare size={20}/></a>
            </div>
        </div>
    </div>
  );
}

export default Home;

import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload} from 'react-icons/fa'

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"></Spotlight>
            <Spotlight className="top-4=10 left-full h-[80vh] w-[50vw]" fill="purple"></Spotlight>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue"></Spotlight>
        </div>
            <div>
              <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>
            <div className="flex justify-center relative my-20 z-10">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                  Welcome to Kushal&apos;s Portfolio Website
                </h2>
                
                <TextGenerateEffect className='text-center text-[40px] md:text-5xl lg:text-6xl' words="I ship code faster than your overnight orders."></TextGenerateEffect>
                
                
                <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    Welcome to my portfolio website. Here, you can explore my projects and professional experiences. Please do not hesitate to contact me for any freelance projects or work opportunities.
                </p>
                <a href='/resume_kushal.pdf' download>
                  <MagicButton 
                    title="view my resume"
                    icon = {<FaDownload />}
                    position='right'
                  />
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero

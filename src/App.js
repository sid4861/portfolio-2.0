import React, { useEffect, useState } from 'react';
import './App.css';
import HeaderImage from "./assets/header-image.png";
import HeaderImage2 from "./assets/header-image-2.jpg";
import { MailIcon, CalendarIcon } from '@heroicons/react/solid'
import locomotiveScroll from "locomotive-scroll";
import WagmiPostcardGraphic from "./assets/wagmi-postcards-graphic.svg";
import CryptoSchoolGraphic from "./assets/crypto-school-graphic.svg";
import InstaclinikGraphic from "./assets/instaclinik-graphic.svg";
import WisheslinkGraphic from "./assets/wisheslink-graphic.svg";
import PaintupGraphic from "./assets/paintup-graphic.svg";
import AmeebaGraphic from "./assets/ameeba-graphic.svg";

function App() {
  return (
    <div className='min-h-screen bg-[#00131E] ' >
      <ContactFab />
      <Header />
      <SocialLinks />
      <Projects />
      {/* <Photos /> */}
    </div>
  );
}

function Header() {
  return (
    <div className=' p-4 md:p-12 flex flex-col md:flex-row items-center justify-around ' >
      <div className='md:w-2/4' >
        <h1 className='font-moche text-[#FDEAA6] text-3xl md:text-7xl'>Hi, I'm Siddharth</h1>
        <p className='text-[#FDEAA6] mt-4' >Code, design, and photography</p>
        <p className='text-[#FDEAA6] mt-4' >
          I am a product oriented
          <span className='text-[#FBAC00] font-moche' > frontend developer </span>
          and {'\u00A0'}
          <span className='text-[#FF60B1] font-moche' >UI designer.</span>
        </p>
        <p className='text-[#FDEAA6] mt-4' >
          I am passionate about technology, web3, design and building digital products.
          I read and pursue photography too.
        </p>
        {/* tags */}
        {/* <div
          className='grid gap-2 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 mt-8 '
        >
          <p className=' text-lg drop-shadow-[2px_2px_0px_rgba(13,18,21,1)] w-80 font-moche text-center text-[#FBAC00] hover:text-[#FF60B1] font-bold' >
            Full stack development
          </p>
          <p className='text-lg drop-shadow-[2px_2px_0px_rgba(13,18,21,1)] w-80 font-moche text-center text-[#00E6C1] hover:text-[#FFF05F] font-bold'>
            UI design
          </p>
          <p className='text-lg drop-shadow-[0.5px_1.5px_0px_rgba(13,18,21,1)] w-80 font-moche text-center text-[#60FF90] hover:text-[#4601F3] font-bold'>
            Photography
          </p>
          <p className='text-lg drop-shadow-[2px_2px_0px_rgba(13,18,21,1)] w-80  font-moche text-center text-[#7660FF] hover:text-[#FBC400] font-bold '>
            Solidity
          </p>
        </div> */}
      </div>
      <div>
        <img src={HeaderImage2} className="w-[320px] h-[320px] rounded-full object-cover mt-4 " />
      </div>
    </div>
  );
}

function ContactFab() {
  return (
    <div className=" z-[3] w-24 bg-[url('./assets/contact.svg')] bg-no-repeat bg-contain h-24 font-sora fixed bottom-2 right-6 md:right-12 md:bottom-12 flex items-start justify-center flex-col" >
      {/* <div className='flex space-between  items-center text-xs text-white font-bold mb-2 cursor-pointer	' >
        <MailIcon className="h-5 w-5 text-white mx-1" />
        <p>Email</p>
      </div> */}
      <div className='flex space-around text-xs items-center text-white font-bold mb-4 cursor-pointer	' onClick={() => window.open("https://calendly.com/siddharthlodha/15min", "_blank")} >
        <CalendarIcon className="h-5 w-5 text-white mx-1" />
        <p>Calendly</p>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className='mt-28 flex flex-col items-center md:flex-row  border-y-4 border-[#FDEAA6] font-moche bg-black' >
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0 cursor-pointer' onClick={() => window.open("https://twitter.com/siddharth0x", "_blank")} >
        <p className='text-[#FDEAA6] text-xl ' >Twitter</p>
      </div>
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0 cursor-pointer' onClick={() => window.open("https://www.linkedin.com/in/siddharth-lodha-693418105/", "_blank")} >
        <p className='text-[#FDEAA6] text-xl  ' >Linkedin</p>
      </div>
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0' >
        <p className='text-[#FDEAA6] text-xl  ' >siddharth0x.eth</p>
      </div>
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0 cursor-pointer' onClick={() => window.open("https://dribbble.com/sid4861", "_blank")} >
        <p className='text-[#FDEAA6] text-xl  ' >Dribbble</p>
      </div>
      <div className=' p-4 text-center w-full cursor-pointer ' onClick={() => window.open("https://github.com/sid4861", "_blank")} >
        <p className='text-[#FDEAA6] text-xl  ' >Github</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className='mt-20 p-6 md:p-4 lg:p-16' >
      <div className="m-auto bg-[url('./assets/projects.svg')] bg-no-repeat bg-contain w-[70vw] h-[20vh] md:w-[500px] md:h-[300px]" >
        <div className='font-moche text-[#2EE8B0] font-bold text-3xl md:text-6xl relative top-8 left-16 md:top-16 md:left-24 drop-shadow-[2px_2px_0px_rgba(13,18,21,1)] w-max' >
          Projects
        </div>
      </div>
      <div className='grid gap-4 grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 ' >
        <div className="
        w-[342px] h-[506px]
        md:w-[389px] md:h-[506px]
        relative 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
        transition-transform
        before:bg-[#00E6C1]
        before:transition-transform
        after:bg-[#FFF05F]
        after:transition-transform
        before:z-[1]
        hover:translate-x-2
        hover:translate-y-2
        hover:before:-translate-x-3
        hover:before:-translate-y-3
        hover:after:-translate-x-6
        hover:after:-translate-y-6
        cursor-pointer
        "
          onClick={() => window.open("https://wagmipostcards.netlify.app/", "_blank")}
        >
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className="w-[100%] h-[40%] overflow-hidden" >
              <img src={WagmiPostcardGraphic} className="w-[100%] transition-transform hover:scale-150" />
            </div>
            <div className='mt-2 p-8' >
              <div>
                <h3 className='font-moche text-lg font-semibold text-[#0D1215]' >
                  Wagmi postcards
                </h3>
                <div className='flex flex-row mt-1' >
                  <div className='font-sora px-6 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Design
                  </div>
                  <div className='font-sora px-6 ml-1 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Development
                  </div>
                </div>
              </div>

              <div className='mt-8' >
                <p className='text-[16px] font-sora text-[#011D2D] ' >
                  Allows users to send NFT postcards to en ETH address - work in
                  progress, designed in Figma, developed in React.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="
        w-[342px] h-[506px]
        md:w-[389px] md:h-[506px]
        relative 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
        transition-transform
        before:bg-[#00E6C1]
        before:transition-transform
        after:bg-[#FFF05F]
        after:transition-transform
        before:z-[1]
        hover:translate-x-2
        hover:translate-y-2
        hover:before:-translate-x-3
        hover:before:-translate-y-3
        hover:after:-translate-x-6
        hover:after:-translate-y-6
        mt-8
        cursor-pointer
        "
          onClick={() => window.open("https://medium.com/@Siddharthux/crypto-school-a-master-class-2c007616baf3", "_blank")}
        >
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className="w-[100%] h-[40%] overflow-hidden" >
              <img src={CryptoSchoolGraphic} className="w-[100%] transition-transform hover:scale-150" />
            </div>
            <div className='mt-2 p-8' >
              <div>
                <h3 className='font-moche text-lg font-semibold text-[#0D1215]' >
                  Crypto School
                </h3>
                <div className='flex flex-row mt-1' >
                  <div className='font-sora px-6 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Design
                  </div>
                </div>
              </div>

              <div className='mt-8' >
                <p className='text-[16px] font-sora text-[#011D2D] ' >
                  A conceptual app to explore web3 courses delivered by domain experts. Designed and prototyped in figma.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="
        w-[342px] h-[506px]
        md:w-[389px] md:h-[506px]
        relative 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
        transition-transform
        before:bg-[#00E6C1]
        before:transition-transform
        after:bg-[#FFF05F]
        after:transition-transform
        before:z-[1]
        hover:translate-x-2
        hover:translate-y-2
        hover:before:-translate-x-3
        hover:before:-translate-y-3
        hover:after:-translate-x-6
        hover:after:-translate-y-6
        cursor-pointer
        "
          onClick={() => window.open("https://app.instaclinik.com/", "_blank")}
        >
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className="w-[100%] h-[40%] overflow-hidden" >
              <img src={InstaclinikGraphic} className="w-[100%] transition-transform hover:scale-150" />
            </div>
            <div className='mt-2 p-8' >
              <div>
                <h3 className='font-moche text-lg font-semibold text-[#0D1215]' >
                  Instaclinik
                </h3>
                <div className='flex flex-row mt-1' >
                  <div className='font-sora px-6 ml-1 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Development
                  </div>
                </div>
              </div>

              <div className='mt-8' >
                <p className='text-[16px] font-sora text-[#011D2D] ' >
                  A sass tool to help doctors and health influencers convert their social Media DMs and following into appointments. Working on this in my full time job.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="
        w-[342px] h-[506px]
        md:w-[389px] md:h-[506px]
        relative 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
        transition-transform
        before:bg-[#00E6C1]
        before:transition-transform
        after:bg-[#FFF05F]
        after:transition-transform
        before:z-[1]
        hover:translate-x-2
        hover:translate-y-2
        hover:before:-translate-x-3
        hover:before:-translate-y-3
        hover:after:-translate-x-6
        hover:after:-translate-y-6
        cursor-pointer
        "
          onClick={() => window.open("https://www.wisheslink.in/", "_blank")}
        >
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className="w-[100%] h-[40%] overflow-hidden" >
              <img src={WisheslinkGraphic} className="w-[100%] transition-transform hover:scale-150" />
            </div>
            <div className='mt-2 p-8' >
              <div>
                <h3 className='font-moche text-lg font-semibold text-[#0D1215]' >
                  Wisheslink
                </h3>
                <div className='flex flex-row mt-1' >
                  <div className='font-sora px-6 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Design
                  </div>
                  <div className='font-sora px-6 ml-1 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Development
                  </div>
                </div>
              </div>

              <div className='mt-8' >
                <p className='text-[16px] font-sora text-[#011D2D] ' >
                  A responsive webapp allowing people to send a group greeting card online. Users can add gifs and photos to the e-card.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="
        w-[342px] h-[506px]
        md:w-[389px] md:h-[506px]
        relative 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
        transition-transform
        before:bg-[#00E6C1]
        before:transition-transform
        after:bg-[#FFF05F]
        after:transition-transform
        before:z-[1]
        hover:translate-x-2
        hover:translate-y-2
        hover:before:-translate-x-3
        hover:before:-translate-y-3
        hover:after:-translate-x-6
        hover:after:-translate-y-6
        mt-8
        cursor-pointer
        "
          onClick={() => window.open("https://www.figma.com/proto/FKzeJh9ufVGwgQuNzpPzTk/event-landing-page?node-id=156%3A8&scaling=min-zoom&page-id=90%3A2", "_blank")}
        >
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className="w-[100%] h-[40%] overflow-hidden" >
              <img src={PaintupGraphic} className="w-[100%] transition-transform hover:scale-150" />
            </div>
            <div className='mt-2 p-8' >
              <div>
                <h3 className='font-moche text-lg font-semibold text-[#0D1215]' >
                  Paintup landing page
                </h3>
                <div className='flex flex-row mt-1' >
                  <div className='font-sora px-6 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Design
                  </div>
                </div>
              </div>

              <div className='mt-8' >
                <p className='text-[16px] font-sora text-[#011D2D] ' >
                  Paintup was a zoom meetup for painters of all skill levels to learn, and discuss their work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="
        w-[342px] h-[506px]
        md:w-[389px] md:h-[506px]
        relative 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
        after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full
        transition-transform
        before:bg-[#00E6C1]
        before:transition-transform
        after:bg-[#FFF05F]
        after:transition-transform
        before:z-[1]
        hover:translate-x-2
        hover:translate-y-2
        hover:before:-translate-x-3
        hover:before:-translate-y-3
        hover:after:-translate-x-6
        hover:after:-translate-y-6
        cursor-pointer
        "
          onClick={() => window.open("https://www.figma.com/proto/1b14ASt0Kw0hyAJ5lv08Ac/ameeba-landing-page?node-id=0%3A3&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=0%3A3", "_blank")}
        >
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className="w-[100%] h-[40%] overflow-hidden" >
              <img src={AmeebaGraphic} className="w-[100%] transition-transform hover:scale-150" />
            </div>
            <div className='mt-2 p-8' >
              <div>
                <h3 className='font-moche text-lg font-semibold text-[#0D1215]' >
                  Ameeba landing page
                </h3>
                <div className='flex flex-row mt-1' >
                  <div className='font-sora px-6 ml-1 py-1 bg-[#EF724F] text-[#FFF05F] text-sm rounded-3xl' >
                    Design
                  </div>
                </div>
              </div>

              <div className='mt-8' >
                <p className='text-[16px] font-sora text-[#011D2D] ' >
                  Landing page for a SASS tool helping front end developers create versioned mock apis to speed up UI development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

function Photos() {
  const scrollRef = React.createRef();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.13,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });
    scroll.on('scroll', obj => {
      setScrollY(obj.scroll.y);
    });
  });

  return (
    <div className='mt-24 p-6 md:p-16' >
      <div className="m-auto bg-[url('./assets/projects.svg')] bg-no-repeat bg-contain w-[200px] h-[200px]" >
        <p className='font-moche text-[#2EE8B0] font-bold text-xl relative top-6 left-14 drop-shadow-[2px_2px_0px_rgba(13,18,21,1)] ' >
          Stills
        </p>
      </div>
      {/* class columns */}
      <div className='w-[100%] relative flex justify-center' data-scroll-container ref={scrollRef} >
        {/* 1st col  column-wrap column-wrap--height*/}
        <div className='relative z-[1] flex p-16 h-[100vh] flex-col-reverse' >
          {/* class column */}
          <div className={`relative will-change-transform flex flex-col-reverse translate-y-[${scrollY}]`} >
            <figure className='z-[1] relative' >
              {/* img wrap */}
              <div data-pos="2" className='w-[190px] h-[220px] relative rounded-lg overflow-hidden'>
                {/* img */}
                <div className="w-[100%] h-[100%] bg-cover bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80.jpg')]" >
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App;

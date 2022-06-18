import './App.css';
import HeaderImage from "./assets/header-image.png";
import { MailIcon, CalendarIcon } from '@heroicons/react/solid'

function App() {
  return (
    <div className='min-h-screen bg-[#011D2D] ' >
      <ContactFab />
      <Header />
      <SocialLinks />
      <Projects />
    </div>
  );
}

function Header() {
  return (
    <div className='p-8 flex flex-col md:flex-row items-center justify-around ' >
      <div  >
        <h1 className='font-moche text-[#FDEAA6] text-3xl md:text-5xl'>Siddharth</h1>
        {/* tags */}
        <div className='grid gap-4 grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 mt-8 ' >
          <div className='w-80 p-2 font-moche bg-[#FF60B1] hover:bg-[#FBAC00] text-center text-[#FBAC00] hover:text-[#FF60B1] font-bold ' >
            <p className=' text-lg drop-shadow-[2px_2px_0px_rgba(13,18,21,1)]' >Full stack development</p>
          </div>
          <div className='w-80 p-2 font-moche bg-[#FFF05F] hover:bg-[#00E6C1] text-center text-[#00E6C1] hover:text-[#FFF05F] font-bold ' >
            <p className=' text-lg drop-shadow-[2px_2px_0px_rgba(13,18,21,1)]' >UI design</p>
          </div>
          <div className='w-80 p-2 font-moche bg-[#60FF90] hover:bg-[#4601F3] text-center text-[#4601F3] hover:text-[#60FF90] font-bold ' >
            <p className='text-lg drop-shadow-[0.5px_1.5px_0px_rgba(13,18,21,1)]' >Photography</p>
          </div>
          <div className='w-80 p-2 font-moche bg-[#7660FF] hover:bg-[#FBC400] text-center text-[#FBC400] hover:text-[#7660FF] font-bold ' >
            <p className='text-lg drop-shadow-[2px_2px_0px_rgba(13,18,21,1)]' >Solidity</p>
          </div>
        </div>
      </div>
      <div>
        <img src={HeaderImage} className="w-[320px] h-[360px]" />
      </div>
    </div>
  );
}

function ContactFab() {
  return (
    <div className=" z-[3] w-24 bg-[url('./assets/contact.svg')] bg-no-repeat bg-contain h-24 font-sora fixed bottom-2 right-6 md:right-12 md:bottom-12 flex items-start justify-center flex-col" >
      <div className='flex space-between  items-center text-xs text-white font-bold mb-2 cursor-pointer	' >
        <MailIcon className="h-5 w-5 text-white mx-1" />
        <p>Email</p>
      </div>
      <div className='flex space-around text-xs items-center text-white font-bold mb-4 cursor-pointer	' >
        <CalendarIcon className="h-5 w-5 text-white mx-1" />
        <p>Calendly</p>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className='flex flex-col items-center md:flex-row  border-y-4 border-[#FDEAA6] font-moche' >
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0' >
        <p className='text-[#FDEAA6] text-2xl  ' >Twitter</p>
      </div>
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0' >
        <p className='text-[#FDEAA6] text-2xl  ' >Linkedin</p>
      </div>
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0' >
        <p className='text-[#FDEAA6] text-2xl  ' >siddharth0x.eth</p>
      </div>
      <div className=' p-4 text-center w-full border-b-4 border-[#FDEAA6] md:border-r-4 md:border-b-0' >
        <p className='text-[#FDEAA6] text-2xl  ' >Dribbble</p>
      </div>
      <div className=' p-4 text-center w-full ' >
        <p className='text-[#FDEAA6] text-2xl  ' >Github</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className='mt-32 p-6 md:p-16' >
      <div className="m-auto bg-[url('./assets/projects.svg')] bg-no-repeat bg-contain w-[200px] h-[200px]" >
        <p className='font-moche text-[#2EE8B0] font-bold text-xl relative top-6 left-14 drop-shadow-[2px_2px_0px_rgba(13,18,21,1)] ' >Projects</p>
      </div>
      <div className='grid gap-16 grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-2 ' >
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
        ">
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className='w-[100%] h-[40%] bg-red-100' ></div>
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
        ">
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className='w-[100%] h-[40%] bg-red-100' ></div>
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
        ">
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className='w-[100%] h-[40%] bg-red-100' ></div>
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
                  A sass tool to help doctors and health influecers convert their social Media DMs and following into appointments. Working on this in my full time job.
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
        ">
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className='w-[100%] h-[40%] bg-red-100' ></div>
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
        ">
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className='w-[100%] h-[40%] bg-red-100' ></div>
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
        ">
          <div className="z-[1] transition transform delay-150 relative p-4 bg-[#F8F3EC] w-[342px] h-[506px] md:w-[389px] md:h-[506px] ">
            <div className='w-[100%] h-[40%] bg-red-100' ></div>
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
export default App;

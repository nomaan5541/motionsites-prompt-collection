import "animate.css";
import bub from '../material/about/aboutBub.svg'
import { BsFillArrowDownCircleFill} from 'react-icons/bs';
// import scrollDown from '../material/about/down-arrow.svg'
import Cs from '../material/about/Cs.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Design from "../material/png/pen.jpg"
import ProgrammingHobbie from "../material/png/hobbieProgramming.jpg"
import GamingHobbie from "../material/png/video-games.png"
export default function About() { 
  
    const aboutme = "Outside of my studies, I am also a self-taught front-end developer, specializing in React, React Router, and Tailwind CSS I am passionate about creating engaging and responsive user interfaces that deliver an exceptional user experience."
  
    return  (
        <>
        <div id="whoIsme" className="overflow-hidden h[100vh] pt-10 lg:h-[100vh] border-b border-zinc-600 dark:border-white">
            <div className="container py-10 flex flex-col gap-[250px] xl:gap-[200px]">
                <div className="flex flex-col lg:flex-row-reverse justify-between items-center animate__animated animate__zoomInUp">
                    <div className="m-auto relative lg:w[437px] ">
                    <h1 className= "top-[50px] stroke-slate-200 w-fit z-10 relative animate__animated animate__zoomInUp font-bold text-center md:text-left text-1xl xl:text-[150px]">
                     Who am I ? 
                    </h1>
                    <img className="bub" src={bub} alt="" />
                    </div>
                </div>
                <BsFillArrowDownCircleFill className=" arrowDownmobile animate__animated animate__bounce animate__infinite" id="arrow" />
                {/* <img id="test" className="animate__animated animate__bounce animate__infinite " src={<BsFillArrowDownCircleFill />} alt="" /> */}
               </div>    
            </div>    
            <div className="section2 px-[50px] lg:px-[110px] py-[80px] border-b border-zinc-600 dark:border-white">
                <AnimationOnScroll className="h-auto flex flex-col gap-10 " animateIn="animate__bounceIn">
                    <div className="flex items-center justify-center lg:justify-between">
                    <h2 className="text-center lg:w-[100px] text-[40px] xl:text-[70px] font-black text-indigo-600 dark:text-white">i'm Studying Computer Science</h2>
                    <img className=" hidden lg:block w-[500px]" src={Cs}></img>
                    </div>
                  <div>
                    <p className="text-center text-gray-400 dark:text-white sm:text-left leading-10"> 
                    {aboutme}
                    </p>
                  </div>
                </AnimationOnScroll>

            </div>
            <div id="skills" className="overflow-hidden container py-20">
            <AnimationOnScroll animateIn="animate__slideInRight" className=" border-b">
                <h1 className="font-black text-center text-indigo-600 dark:text-white">Let's take a look at my hobbies</h1>
                <div alt="hobbies" className="p-10 flex flex-col items-center lg:items-stretch lg:flex-row gap-10">
                
                <div class="max-w-sm w-auto lg:w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">              
                        <img class="h-full md:h-[380px] rounded-t-lg" src={Design} alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Design</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">As an aspiring front-end developer, I have a deep appreciation for design and a passion for creating visually appealing and intuitive user interfaces.</p>
                    </div>
                </div>

                <div class="max-w-sm w-auto lg:w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">              
                        <img class="rounded-t-lg h-full md:h-[380px]" src={ProgrammingHobbie} alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Programming</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have a deep passion for programming, driven by my love for problem-solving and the endless creativity it allows. I am always excited to explore and implement new technologies, using them to tackle complex challenges.</p>
                    </div>
                </div>
                <div class="max-w-sm w-auto lg:w-[500px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">              
                <img class="rounded-t-lg h-full md:h-[380px]" src={GamingHobbie} alt="" />
                    <div class="p-5">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gaming</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have a strong passion for gaming, finding joy in the immersive worlds and thrilling challenges it presents.</p>
                    </div>
                </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll className="skillsSection" animateIn="animate__zoomIn">
                <h1 className="text-[50px] md:text-[100px] font-black text-center p-10 text-indigo-600 dark:text-white">Skills</h1>
                <div className="skillsContainer flex flex-row flex-wrap justify-evenly gap-10">
                <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600  dark:text-white">HTML</span>
                <span className="text-sm font-medium text-indigo-600  dark:text-white">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '80%'}} />
                </div>
                </div>
                 <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600  dark:text-white">CSS</span>
                <span className="text-sm font-medium text-indigo-600 dark:text-white">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '70%'}} />
                </div>
                </div>
                <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600  dark:text-white">Javascript</span>
                <span className="text-sm font-medium text-indigo-600  dark:text-white">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '70%'}} />
                </div>
                </div>
                <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600  dark:text-white">React</span>
                <span className="text-sm font-medium text-indigo-600 dark:text-white">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '70%'}} />
                </div>
                </div>
                <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600  dark:text-white">React Router</span>
                <span className="text-sm font-medium text-indigo-600  dark:text-white">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '70%'}} />
                </div>
                </div>
                <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600 dark:text-white">C++</span>
                <span className="text-sm font-medium text-indigo-600 dark:text-white">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '80%'}} />
                </div>
                </div>
                <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600 dark:text-white">Java</span>
                <span className="text-sm font-medium text-indigo-600  dark:text-white">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '70%'}} />
                </div>
                </div>
                <div className="w-2/5">
                <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-indigo-600  dark:text-white">Photoshop</span>
                <span className="text-sm font-medium text-indigo-600 dark:text-white">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{width: '80%'}} />
                </div>
                </div>
                </div>
            </AnimationOnScroll>
            </div>

        </>
    )
}
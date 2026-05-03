import "animate.css";
import programmerIllus from '../../material/Home/programmerIllus.png';
import Cv from "../../material/PDFs/Mina_Melad_Resume.pdf"
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
function Home() {

  return (
    <div className="home dark:home animate__fadeIn">
      <div className="h-full container py-12 flex flex-col justify-center md:justify-between items-center gap-10 sm:flex-row-reverse text-center">
          <div>
          <div className="flex flex-col gap-10" id="shortDesc">
          <h1 className= "animate__animated animate__zoomInUp text-indigo-600 dark:text-white font-bold text-center md:text-left text-1xl xl:text-[120px] md:text-[53px]">
            Hi!
            <br></br>
            i'm Nomaan
          </h1>
          <div className="flex flex-col sm:flex-row gap-10 md:gap-0 items-center justify-evenly">
          <p className="text-left tracking-widest text-indigo-600 dark:text-white ">Front End Developer</p>
          <a href={Cv} download class= "bg-transparent w-[170px] justify-center bg-indigo-600 hover:bg-white duration-200 hover:text-black text-indigo-600 dark:text-white border-indigo-600 dark:border-white  border-dotted border-2 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg class="fill-current w-4 h-4 mr-2 text-indigo-600 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
              <span className="text-indigo-600 dark:text-white">resume</span>
        </a>
          </div>
        <div className="flex justify-center">
        <a className="icon text-indigo-600 dark:text-white hover:scale-125 transition duration-150 w-fit mx-5" target={"_blank"} href="https://www.facebook.com/profile.php?id=100011422489028"><BsFacebook size={40} /> </a>
        <a className="icon text-indigo-600 dark:text-white hover:scale-125 transition duration-150 w-fit mx-5" target={"_blank"} href="https://www.linkedin.com/in/mina-melad"><BsLinkedin size={40} /> </a>
        <a className="icon text-indigo-600 dark:text-white hover:scale-125 transition duration-150 w-fit mx-5" target={"_blank"} href="https://github.com/minamelad33333"><BsGithub size={40} /> </a>
        </div>
          </div>
          </div>    
          <div className="animate__animated animate__fadeInLeft brain hidden md:w-[570px] md:block">
          <img src={programmerIllus} />
          </div>
      </div>
      </div>
  );
}

export default Home;

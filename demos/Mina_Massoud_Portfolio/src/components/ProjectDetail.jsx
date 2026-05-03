import dataProjects from "../data/dataProjects"
import { useParams } from "react-router-dom"
import 'animate.css';
import { ImBackward } from 'react-icons/im'
import {Link} from "react-router-dom"
export default function ProjectDetail () { 
    let params = useParams(); 
    let myData = dataProjects.projects;
    let myProject ; 
    for (let i = 0 ; i<myData.length ; i++) { 
        if (myData[i].id === +params.id) { 
             myProject = myData[i]; 
        }
    }
    console.log(myProject);
    return ( 
        <div className="relative detail top-[5rem]">
        <div className=" mx-auto w-[80%] text-indigo-600 dark:text-white animate__animated animate__zoomInUp"> 
        <Link to="/Projects" className="transition text-indigo-600 dark:text-white "><ImBackward size={30} /></Link>
        <div className="flex mt-10 gap-[20px] flex-col lg:flex-row items-center lg:items-start">
        <img className="rounded object-cover object-center w-full lg:w-[70%]" src={myProject.images.main}></img>
        <div className="text-[13px] lg:text-[15px] text-blue-600 dark:text-white font-bold w-full lg:w-[20%] h-full font-bold">{myProject.info}</div>
        </div>
        </div>  
        <div className="w-fit py-10 mx-auto">
        {myProject.demo? <a className="font-black text-blue-600	dark:text-white font-bold" target={"_blank"} href={myProject.demoLink}>Click to See the Demo!</a> : <p className="text-blue-600	dark:text-white font-bold">No Demo is Available Right now &#129301;</p> }
        </div>
        </div>
    )
}
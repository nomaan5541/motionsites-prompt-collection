
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import ReactFullpage from '@fullpage/react-fullpage';
import rocket from '../material/Projects/rocket.svg'
import 'animate.css';
import dataProject from "../data/dataProjects"
import { Link } from 'react-router-dom';

export default function Project() {   

  let [loading,setLoading] = useState(false); 

  useEffect(()=> {
    setTimeout(() => {
      setLoading(prev=>!prev);
    }, "1000"); 
  },[1])
    function Card(props) { 
        return (
          <>
        <div className="max-w-sm h-auto flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`${props.id}`} className='w-full'>
          <img className="rounded-t-lg h-[200px] w-full object-cover" src={props.image} alt="" />
        </Link>
        <div className="p-5 flex flex-col justify-between h-full">
        <Link to={`${props.id}`} className='w-full'>
            <h5 className="mb-2 text-[15px] text-left font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
          </Link>
          <p className="mb-3 text-[13px] text-gray-700 dark:text-gray-400">{props.description}</p>
          <Link to={`${props.id}`} className = "w-full justify-center inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </Link>
        </div>
      </div>
      </>
        )
    }

    console.log(dataProject.projects);

    let Projects = dataProject.projects.map((project) => { 
        return (
        <Card id={project.id}
        image = {project.images.main}
        description = {project.desc}
        name = {project.name}
        />
        )
    })

    return ( 
      <>
        <ReactFullpage
        //fullpage options
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {1000} /* Options here */
    
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className={`section relative projectMain-section`}>
                <div className='container'>
                <div alt="text" className='overflow-hidden z-20 relative animate__animated animate__zoomIn h-auto'>
                <h1 className='font-black w-3/6 text-[50px] md:text-[80px] lg:text-indigo-700 dark:text-white lg:dark:text-white '>Hi! , That's my WorkSpace Section</h1>
                <p className='text-[15px] py-1 animate__animated animate__shakeY animate__slower 2s animate__infinite infinite text-indigo-600 dark:text-white '>Scroll Down to see my projects!</p>
                </div>
                <img className=' hidden md:block animate__animated animate__backInRight min-w-[300px] sm:w-[700px] lg:w-fit min-h-[50vh] absolute right-[10%] z-10 top-0' src={rocket} alt="" />
                </div>
              </div>
              <div className="section p-10 pt-20">
                <div>
                <div className='flex flex-wrap gap-[10px] justify-center'>
                {Projects}
                </div> 
                </div>        
              </div>
          </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
    )
  
}


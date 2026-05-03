import './App.css'
import { HashRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home/Home';
import Contact from './components/Contact';
import Project from './components/Projects';
import About from './components/About';
import Layout from './components/LayOut';
import Error from './components/Error';
import ProjectDetail from './components/ProjectDetail';
function App() {
  return (
    <HashRouter>
    <Routes>
    <Route path="/" element = {<Layout/>} >
    <Route index  element = {<Home/>} />
    <Route path='Contact'  element = {<Contact />} />
    <Route path='About'  element = {<About />} />
    <Route path='Projects'  element = {<Project />} />
    <Route path = 'Projects/:id' element = {<ProjectDetail />} />
    <Route path='*' element = {<Error/>} />
    </Route>
    </Routes>
    </HashRouter>
  )
}

export default App

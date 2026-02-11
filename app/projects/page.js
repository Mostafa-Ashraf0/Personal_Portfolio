import style from '../../styles/home.css'
import Image from 'next/image';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectsContainer from '../components/projects/projectsContainer';

const Projects = ()=>{
    
    return(
        <div className='container'>
            <Header/>
            <div className='main'>
               <div className='projects'>
                    <div className='head'>
                        <span>Home - Projects</span>
                        <h1>Projects</h1>
                    </div>
                    <ProjectsContainer/>
               </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Projects;
'use client';
import style from '../../styles/header.module.css';
import { useRouter } from 'next/navigation';

const Header = ()=>{
    const router = useRouter();
    const goToHome = ()=>{
        router.push('/');
    }
    const goToProjects = ()=>{
        router.push('/projects');
    }
    return(
        <div className={style.header}>
            <span>M.A</span>
            <nav>
                <ul>
                    <li onClick={goToHome}>Home</li>
                    <li onClick={goToProjects}>Projects</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;
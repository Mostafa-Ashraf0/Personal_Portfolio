'use client';
import style from '../../styles/header.module.css';
import { useRouter } from 'next/navigation';
import home from '../../public/home-1393-svgrepo-com.svg';
import projects from '../../public/bag-svgrepo-com.svg';
import contact from '../../public/contact-mail-svgrepo-com.svg';
import blog from '../../public/blog-svgrepo-com.svg';
import Image from 'next/image';

const Header = ()=>{
    const router = useRouter();
    const goToHome = ()=>{
        router.push('/');
    }
    const goToProjects = ()=>{
        router.push('/projects');
    }
    const goToContact = ()=>{
        router.push('/contact');
    }
    return(
        <div className={style.header}>
            <span className={style.icon}>M.A</span>
            <nav>
                <ul>
                    <li onClick={goToHome}>
                        <Image
                        src={home}
                        alt=''
                        width={0}
                        height={0}
                        />
                        <span>Home</span>
                    </li>
                    <li onClick={goToProjects}>
                        <Image
                        src={projects}
                        alt=''
                        width={0}
                        height={0}
                        />
                        <span>Projects</span>
                    </li>
                    <li onClick={goToContact}>
                        <Image
                        src={contact}
                        alt=''
                        width={0}
                        height={0}
                        />
                        <span>Contact</span>
                    </li>
                    <li>
                        <Image
                        src={blog}
                        alt=''
                        width={0}
                        height={0}
                        />
                        <span>Blog</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Header;
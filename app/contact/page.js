import Header from '../components/header';
import Footer from '../components/footer';
import style from '../../styles/contact/contact.module.css';
import arrow from '../../public/right-arrow-backup-2-svgrepo-com.svg';
import Image from 'next/image';
import ContactForm from '../components/contact/contactForm';
import LinkBox from '../components/contact/linkBox';

const Contact = ()=>{
    
    return(
        <div className={style.container}>
            <Header/>
            <div className={style.main}>
               <div className={style.contact}>
                    <div className={style.head}>
                        <span>Home <Image src={arrow} alt=''/> Contact</span>
                        <h1>Get in touch</h1>
                    </div>
                    <div className={style.body}>
                        <LinkBox/>
                        <ContactForm/>
                    </div>
               </div>
            <Footer/>
            </div>
        </div>
    )
}

export default Contact;
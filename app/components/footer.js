import style from '../../styles/footer.module.css';

const Footer = ()=>{
    return(
        <div className={style.footer}>
            <div className={style.left}>
                <span>M.A</span>
                <span>@ 2026 Mostafa Ashraf</span>
            </div>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
        </div>
    )
};

export default Footer;
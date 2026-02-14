import style from '../../../styles/contact/contactForm.module.css';


const ContactForm = ()=>{
    return(
        <div className={style.main}>
            <form>
                <h1>Send a Message</h1>
                <div className={style.bigGroup}>
                    <div className={style.subGroup}>
                        <label>Name</label>
                        <input type='text'/>
                    </div>
                    <div className={style.subGroup}>
                        <label>Email</label>
                        <input type='text'/>
                    </div>
                </div>
                <div className={style.group}>
                    <label>Subject</label>
                    <input type='text'/>
                </div>
                <div className={style.group}>
                    <label>Message</label>
                    <textarea name="message" rows="5" cols="30"/>
                </div>
                <button>Send Message</button>
                <span style={{fontSize:'12px'}}>This message will be sent [mostafaashrof158@gmail.com]</span>
            </form>
        </div>
    )
}

export default ContactForm;
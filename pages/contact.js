import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contact.module.css'
import emailjs from 'emailjs-com'




var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 



export default function Contact() {
    
    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_KEY, e.target, process.env.NEXT_PUBLIC_USER_ID)
            .then((result)=>{
                alert('Email sent successfully!\nHave a nice day:)')
                console.log(result.text);
            }, (error) => {
                alert('Try again please;)')
                console.log(error.text);
            });
    }


  return (
    <div className={styles.main}>
      <Head>
        <title>PARK INAE PORTFOLIO 2021</title>
        <meta name="description" content="Web - Grapic Designer Portfolio " />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainallbar}>
          <menubar className={styles.menubar}>
            <img src="/icon.png"></img>
            <a href="/"><b>PARK INAE</b></a>
            <a href="/about">About</a>
            <a href="/graphicdesign">Graphic Design</a>
            <a href="/webdesign">Web Design</a>
            <a href="/illustration">Illustration</a>
            <a href="/contact">Contact</a>
          </menubar>
          <time className={styles.time}>{date}</time>
        </div>

        <div className={styles.contentbox}>
            <div className={styles.contentboxhead}>
                Contact.jpg
            </div>
            <div className={styles.contentx}><a href="/">✕</a></div>
            <div className={styles.contentdetail}>

                <form className={styles.contenttext} onSubmit={sendEmail}>
                    <div className={styles.contact}>
                        
                        <div className={styles.contactdetail}>
                            <div className={styles.label}>
                                <label for="name">Name</label>
                            </div>
                            <div className={styles.labelinput}>
                                <input type="text" name="name" id="name" placeholder="Your name" required />
                            </div>
                        </div>
                        <div className={styles.contactdetail}>
                            <div className={styles.label}>
                                <label for="email">E-mail</label>
                            </div>
                            <div className={styles.labelinput}>
                                <input type="text" name="email" id="email" placeholder="Your E-mail" required />
                            </div>
                        </div>
                        <div className={styles.contactdetail}>
                            <div className={styles.label}>
                                <label for="message">Message</label>
                            </div>
                            <div className={styles.labelinput}>
                                <textarea cols="50" name="message" rows="10" placeholder="Your message"></textarea>
                            </div>                    
                        </div>
                        <div className={styles.submit}>
                            <label></label>
                        </div>
                        <div className={styles.submitbtn}>
                            <input type="submit" name="submit" value="SUBMIT" />
                        </div>
                    </div>
                                  
                </form>
                
                
          
                </div>
        </div>
        

      </main>      
    </div>
  )
}

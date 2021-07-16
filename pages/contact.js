import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import emailjs from 'emailjs-com'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import styles from '../styles/Contact.module.css'



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

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


  return (
    <div className={styles.main}>
      <Head>
        <title>PARK INAE PORTFOLIO 2021</title>
        <meta name="description" content="Web - Grapic Designer Portfolio " />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
      <div className={styles.mainallbar}>
            <div className={styles.menubar}>
                <img src="/icon.png" alt="Inae Icon"></img>
                <Link href="/" passHref><b>PARK INAE</b></Link>
                <Link href="/about">About</Link>
                <Link href="/graphicdesign">Graphic Design</Link>
                <Link href="/webdesign">Web Design</Link>
                <Link href="/illustration">Illustration</Link>
                <Link href="/contact">Contact</Link>
            </div>
          <div className={styles.bgmenu} >
            <Button style={{color: 'white'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component="a" href="/about" conClick={handleClose}>About</MenuItem>
                <MenuItem component="a" href="/graphicdesign" onClick={handleClose}>Graphic Design</MenuItem>
                <MenuItem component="a" href="/webdesign" onClick={handleClose}>Web Design</MenuItem>
                <MenuItem component="a" href="/illustration" onClick={handleClose}>Illustration</MenuItem>
                <MenuItem component="a" href="/contact" onClick={handleClose}>Contact</MenuItem>
            </Menu>
          </div>
            <time className={styles.time}>{date}</time>
        </div>

        <div className={styles.contentbox}>
            <div className={styles.contentboxhead}>
                Contact.jpg
            </div>
            <div className={styles.contentx}><Link href="/">✕</Link></div>
            <div className={styles.contentdetail}>

                <form className={styles.contenttext} onSubmit={sendEmail}>
                    <div className={styles.contact}>
                        
                        <div className={styles.contactdetail}>
                            <div className={styles.label}>
                                <label>Name</label>
                            </div>
                            <div className={styles.labelinput}>
                                <input type="text" name="name" id="name" placeholder="Your name" required />
                            </div>
                        </div>
                        <div className={styles.contactdetail}>
                            <div className={styles.label}>
                                <label>E-mail</label>
                            </div>
                            <div className={styles.labelinput}>
                                <input type="text" name="email" id="email" placeholder="Your E-mail" required />
                            </div>
                        </div>
                        <div className={styles.contactdetail}>
                            <div className={styles.label}>
                                <label>Message</label>
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

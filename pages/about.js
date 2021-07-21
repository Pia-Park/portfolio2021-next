import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function About() {

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
          <menubar className={styles.menubar}>
            <img src="/icon.png" alt="Inae Icon"></img>
            <Link href="/" passHref><b>PARK INAE</b></Link>
            <Link href="/about">About</Link>
            <Link href="/graphicdesign">Graphic Design</Link>
            <Link href="/webdesign">Web Design</Link>
            <Link href="/illustration">Illustration</Link>
            <Link href="/contact">Contact</Link>
          </menubar>
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
                <MenuItem component="a" href="/about" onClick={handleClose}>About</MenuItem>
                <MenuItem component="a" href="/graphicdesign" onClick={handleClose}>Graphic Design</MenuItem>
                <MenuItem component="a" href="/webdesign" onClick={handleClose}>Web Design</MenuItem>
                <MenuItem component="a" href="/illustration" onClick={handleClose}>Illustration</MenuItem>
                <MenuItem component="a" href="/contact" onClick={handleClose}>Contact</MenuItem>
                <MenuItem component="a" href="/" onClick={handleClose}>Desktop</MenuItem>

            </Menu>
          </div>
          <time className={styles.time}>{date}</time>
        </div>

        <div className={styles.contentbox}>
            <div className={styles.contentboxhead}>
                AboutMe.jpg
            </div>
            <div className={styles.contentx}><Link href="/">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                    <img src="/about.jpg" alt="self portrait, oil painting, 2007"></img>
                    <div className={styles.text}>Self Portrait, Oil paiting, 2007</div>
                  </div>
                  <contenttext className={styles.contenttext}>
                      <b>PARK INAE</b><br></br>
                      Graphic Designer / Web Designer / Illustrator<br></br>
                      I have been a graphic and web designer and illustrator for 6 years, I have various types of design project experiences: web design, print material design, brand identity design, package design and illustration. 
                      I believe that design helps people and connects people to people. Making people happy is the purpose of my design.    <br></br>
                      <br></br><b>Skills</b><br></br>
                      Adobe Photoshop / Adobe Illustrator<br></br>
                      Adobe Indesign / Adobe Premiere<br></br>
                      Adobe After effect / Adobe XD<br></br>
                      HTML / SASS / CSS / Javascript<br></br>
                      NodeJS / NextJS / React<br></br>
                      Figma / Microsoft office<br></br>
                      <br></br><b>Like</b><br></br>
                      Donut / Library / Walking / Eating<br></br>
                
                  </contenttext>
              </div>

            </div>
        </div>
        

      </main>      
    </div>
  )
}

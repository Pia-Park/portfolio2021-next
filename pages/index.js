import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Home() {

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
        <title>PARK INAE PORTFOLIO 2022</title>
        <meta name="description" content="Web Design, Graphic Design, Illustration Portfolio " />
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
        <div>
          <Link href="/about" className={styles.about} passHref>
            <about className={styles.about}>
              <img src="/about.jpg" alt="About me Image"></img>
              <boxtext className={styles.boxtext}>
                AboutMe.jpg
              </boxtext>              
            </about>
          </Link>
        </div>
        <folders className={styles.folders}>
          <folder className={styles.folder}>
            <Link href="/graphicdesign" passHref>
              <div className={styles.boxes}>
                <img src="/Graphic Design.png" alt="Graphic design folder"></img>              
                <boxtext className={styles.boxtext}>
                  Graphic Design
                </boxtext>
              </div>
            </Link>
          </folder>
          <folder className={styles.folder}>
            <Link href="/webdesign" passHref>
              <div className={styles.boxes}>
                <img src="/Web Design.png" alt="Web design folder"></img>              
                <boxtext className={styles.boxtext}>
                  Web Design
                </boxtext>
              </div>
            </Link>
          </folder>
          <folder className={styles.folder}>
            <Link href="/illustration" passHref>
              <div className={styles.boxes}>
                <img src="/illustration.png" alt="Illustration"></img>              
                <boxtext className={styles.boxtext}>
                  Illustration
                </boxtext>
              </div>
            </Link>
          </folder>
        </folders>
        <div>
          <div>
            <Link href="/contact" className={styles.contact} passHref>
              <about className={styles.contact}>
                <img src="/contact.jpg" alt="Contact Image"></img>
                <boxtext className={styles.boxtext}>
                  Contact.jpg
                </boxtext>              
              </about>
            </Link>

          </div>
        </div>
        <skills className={styles.skillall}>
          <skillsbox className={styles.skillsbox}>
            <skill className={styles.skill}>
              <img src="/Illustrator-96.png" alt="Adobe Illustrator"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/Photoshop-96.png" alt="Adobe Photoshop"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/InDesign-96.png" alt="Adobe InDesign"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/Premiere-96.png" alt="Adobe Premiere"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/XD-96.png" alt="Adobe XD"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/JavaScript-Logo.png" alt="JavaScript"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/html.png" alt="HTML"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/css.png" alt="CSS"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/react.png" alt="React"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/sass.png" alt="Sass"></img>              
            </skill>

          </skillsbox>
          <skillsback>
            <div className={styles.skillsback}>

            </div>
          </skillsback>
        </skills>

      </main>      
    </div>
  )
}

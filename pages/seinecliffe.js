import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Seinecliffe.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { style } from 'dom-helpers';

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Seinecliffe() {

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
                Seinecliffe.zip
            </div>
            <div className={styles.contentx}><Link href="/graphicdesign">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                    <a href="https://www.seinecliffe.com/" target="_blank" rel="noreferrer">
                      <img src="/seinecliffe_mockup2_thumb.jpg" alt="Seinecliffe Branding, 2022"></img>
                    </a>
                  </div>
                  <contenttext className={styles.contenttext}>
                      <b>Seinecliffe Branding, 2021</b>
                      Photoshop / Illustrator <br></br>
                      • Logo Design<br></br>
                      • Applications Design<br></br>
                      <br></br><br></br><br></br>
                      <div className={styles.beforeafter}>
                        <div className={styles.before}> 
                          <b>Business Card</b><br></br>
                          <img src="BC_mockup2.jpg" alt="datametrex main page before" className={styles.imgexplain}></img>
                        </div>
                        <div className={styles.before}> 
                          <b></b><br></br>
                          <img src="BC_mockup1.jpg" alt="datametrex main page After" className={styles.imgexplain}></img>
                        </div>
                      </div>
                      <br></br><br></br>
                     
                      

                  </contenttext>
              </div>

            </div>
        </div>
        

      </main>      
    </div>
  )
}

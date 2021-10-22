import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Medicall.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { style } from 'dom-helpers';

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Medicall() {

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
                Medicallmd.ca
            </div>
            <div className={styles.contentx}><Link href="/webdesign">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                    <a href="https://www.medicallmd.ca/" target="_blank" rel="noreferrer">
                      <img src="/medicall_main.jpg" alt="Screenpro Security website design, 2021"></img>
                      Visit the website (click)
                    </a>
                  </div>
                <contenttext className={styles.contenttext}>
                      <b>Medicall MD website design, 2021</b>
                      Photoshop / Illustrator / Wix<br></br>
                      • Website redesign<br></br>
                      • Update information<br></br>
                      • Visualize existing information<br></br><br></br><br></br>
                    <div className={styles.beforeafter}>
                        <div className={styles.before}> 
                          <b>Before _ Main page</b><br></br>
                          <img src="medicall_main_before.jpg" alt="Medicall MD main page before" className={styles.imgexplain}></img>
                        </div>
                        <div className={styles.before}> 
                          <b>After _ Main page</b><br></br>
                          <img src="medicall_main_after.jpg" alt="Medicall MD main page After" className={styles.imgexplain}></img>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className={styles.beforeafter}>
                        <div className={styles.before}> 
                          <b>Before _ About</b><br></br>
                          <img src="medicall_about_before.jpg" alt="Medicall MD about part before" className={styles.imgexplain}></img>
                        </div>
                        <div className={styles.before}> 
                          <b>After _ About</b><br></br>
                          <img src="medicall_about_after.jpg" alt="Medicall MD about part After" className={styles.imgexplain}></img>
                        </div>
                    </div>
                    <div className={styles.beforeafter}>
                        <div className={styles.before}> 
                          <b>Before _ Outcome</b><br></br>
                          <img src="medicall_outcome_before.jpg" alt="Medicall MD outcome before" className={styles.imgexplain}></img>
                        </div>
                        <div className={styles.before}> 
                          <b>After _ Outcome</b><br></br>
                          <img src="medicall_outcome_after.jpg" alt="Medicall MD outcome After" className={styles.imgexplain}></img>
                        </div>
                    </div>

                </contenttext>
              </div>

            </div>
        </div>
        

      </main>      
    </div>
  )
}

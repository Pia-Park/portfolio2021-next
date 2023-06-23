import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/InterbeWeb.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { style } from 'dom-helpers';
import { Fancybox } from "@fancyapps/ui";



var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function InterbeWeb() {


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
        <title>PARK INAE PORTFOLIO 2023</title>
        <meta name="description" content="Web/UI/UX and Grapic Designer Portfolio " />
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
                interBE Solutions.com
            </div>
            <div className={styles.contentx}><Link href="/webdesign">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                    <a href="https://www.interbesolutions.com/" target="_blank" rel="noreferrer">
                      <img src="/interbe_main.jpg" alt="interBE Solutions website design, 2021"></img>
                      Visit the website (click)
                    </a>
                  </div>
                  <contenttext className={styles.contenttext}>
                    <textbox className={styles.textbox}>
                      <div className={styles.titlebig}>
                        interBE Solutions Brand Identity, 2021
                      </div>
                      <div><b>Industry</b> EV charging</div>
                      <div><b>Mission</b> Website design indicating that a business related to EV Charging Platform is carried out.</div>
                      <div><b>Website</b> <a href="https://www.interbesolutions.com/" target="_blank" rel="noreferrer">www.interbesolutions.com</a></div>
                    </textbox>
                    <br></br>
                    <div className={styles.titlesmall}>Brand Color palette</div>
                    <br></br>
                    <div className={styles.beforeafter}>
                      <div className={styles.colorbox1}>
                      </div>
                      <div className={styles.colorbox2}>
                      </div>
                      <div className={styles.colorbox3}>
                      </div>
                      <div className={styles.colorbox4}>
                      </div>
                    </div>
                    <br></br>
                    <div className={styles.titlesmall}>Icons</div>
                    <div className={styles.imgbox}>
                          <img src="/interbe_illu1.jpg" alt="interBE Website Design, 2021"></img>
                          <img src="/interbe_illu2.jpg" alt="interBE Website Design, 2021"></img>
                          <img src="/interbe_illu3.jpg" alt="interBE Website Design, 2021"></img>

                    </div>
                    <div className={styles.titlesmall}>Live Website</div>
                    <div >
                      <video autoPlay loop style={{ width: '70vw', height: 'auto'}} >
                        <source src="/interbe.webm" />
                      </video>
                    </div>
                  </contenttext>
              </div>

            </div>
        </div>
        

      </main>      
    </div>
  )
}

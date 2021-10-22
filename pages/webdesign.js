import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fancybox } from "@fancyapps/ui";
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import styles from '../styles/Webdesign.module.css'



var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Webdesign() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };




  return (
    <div className={styles.main}>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"
        />

      <Head>
        <title>PARK INAE PORTFOLIO 2021</title>
        <meta name="description" content="Web - Grapic Designer Portfolio " />
        <link rel="icon" href="/icon.png" />
        {/* <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script> */}

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
                Web Design
            </div>
            <div className={styles.contentx}><Link href="/">✕</Link></div>
            <div className={styles.contentall}>
                <div className={styles.contentdetail}>
                  <div className={styles.detailbox}>
                    <Link href="/datametrex" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/dm_main.jpg" alt="datametrex website design" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          datametrex.com
                        </boxtext>              
                      </about>
                    </Link>
                  </div>
                  <div className={styles.detailbox}>
                    <Link href="/screenprosecurity" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/screenpro_main.jpg" alt="screenpro website design" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          Screenpro Security.com
                        </boxtext>              
                      </about>
                    </Link>
                  </div>
                  <div className={styles.detailbox}>
                    <Link href="/medicall" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/medicall_main.jpg" alt="Medicall website design" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          MedicallMD.ca
                        </boxtext>              
                      </about>
                    </Link>
                  </div>
                  <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="JustBB, Web Magazine Design, Photoshop/Illustrator, 2014" href="/justbb.webm">
                      <img src="/webjustbb.png" className={styles.detailimg} alt="JustBB Webzine"/>
                      JustBB.mov
                    </a>
                  </div>
                  <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="Suntory, locomoa Product Landing Page Design and Illustration, Photoshop/Illustrator, 2019" href="/suntory_lcmr_a.webm">
                      <img src="/lcma_main.jpg" className={styles.detailimg} alt="Suntory Locomoa"/>
                      Suntory_lcma.mov
                    </a>
                  </div>
                  <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="Suntory, Grand Maca Product Landing Page Design, Photoshop/Illustrator, 2019" href="/suntory_maca.webm">
                      <img src="/maca.png" className={styles.detailimg} alt="Suntory Maca"/>
                      Suntory_maca.mov
                    </a>
                  </div>
                  <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="Suntory, Glucosamine Product Landing Page Design, Photoshop/Illustrator, 2019" href="/suntory_glc.webm">
                      <img src="/glc.png" className={styles.detailimg} alt="Suntory Glucosamine"/>
                      Suntory_glc.mov
                    </a>
                  </div>
                  {/* <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="Project, Shopping mall Web site Design and Logo Design, html/javascript/sass, 2021" href="/goodgirl.webm">
                      <img src="/goodgirl.jpg" className={styles.detailimg} alt="Good Girl Project"/>
                      Good Girl Project.mov
                    </a>
                  </div>
                  <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="Project, Web site Design and Logo Design, html/javascript/sass, 2020" href="/11am.webm">
                      <img src="/11am.png" className={styles.detailimg} alt="11am Project"/>
                      11am Project.mov
                    </a>
                  </div> */}
                </div>

            </div>
        </div>
        
      </main>    
      
    </div>
    
  )
}

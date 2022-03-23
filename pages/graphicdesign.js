import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Graphicdesign2.module.css'
import { Fancybox } from "@fancyapps/ui";
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Link from 'next/link'



var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Graphicdesign() {

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
        <title>PARK INAE PORTFOLIO 2022</title>
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
                Graphic Design
            </div>
            <div className={styles.contentx}><Link href="/">✕</Link></div>
                <div className={styles.contentdetail}>
                  <div className={styles.detailbox}>
                    <Link href="/seinecliffe" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/seinecliffe_thumb.jpg" alt="Seinecliffe Brand Identity" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          Seinecliffe.zip
                        </boxtext>              
                      </about>
                    </Link>
                  </div>
                  <div className={styles.detailbox}>
                    <Link href="/screenprosecurityGraphic" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/SCRN_thumbs.jpg" alt="Screenpro Security Marketing Graphics" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          Screenpro Security.zip
                        </boxtext>              
                      </about>
                    </Link>
                  </div>
                  <div className={styles.detailbox}>
                    <Link href="/interbe" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/interbe_thumb.jpg" alt="interBE Solutions Brand identity" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          interBE Solutions.zip
                        </boxtext>              
                      </about>
                    </Link>
                  </div>
                  <div className={styles.detailbox}>
                    <Link href="/conciergemedical" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/cm_thumb.jpg" alt="Concierge Medical Brand identity" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          Concierge Medical.zip
                        </boxtext>              
                      </about>
                    </Link>
                  </div>
                  <div className={styles.detailbox}>
                    <Link href="/datametrexGraphic" className={styles.detail} passHref>
                      <about className={styles.detaillink}>
                        <img src="/DM_sns1.jpg" alt="Datametrex Graphic for Social Media" className={styles.detailimg}></img>
                        <boxtext className={styles.detaillinktext}>
                          Datametrex.zip
                        </boxtext>              
                      </about>
                    </Link>
                  </div>

                </div>
      
            
        </div>
        
      </main>    
      
    </div>
    
  )
}

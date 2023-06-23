import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Interbe.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { style } from 'dom-helpers';

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Interbe() {

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
                InterBE Solutions.zip
            </div>
            <div className={styles.contentx}><Link href="/graphicdesign">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                      <img src="/interbe_main.jpg" alt="interBE Solutions Branding, 2021"></img>
                  </div>
                  <contenttext className={styles.contenttext}>
                    <textbox className={styles.textbox}>
                      <div className={styles.titlebig}>
                        interBE Solutions Brand Identity, 2021
                      </div>
                      <div><b>Industry</b> EV charging</div>
                      <div><b>Mission</b> Logo design indicating that a business related to EV Charging Platform is carried out. Design of various applications using the logo created.</div>
                      <div><b>Website</b> <a href="https://www.interbesolutions.com/" target="_blank" rel="noreferrer">www.interbesolutions.com</a></div>
                    </textbox>
                    <br></br>
                    <div className={styles.titlesmall}>Brand Color palette</div>
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
                      <div className={styles.imgbox}>
                          <img src="/interbe_logo1.jpg" alt="interBE Brand identity, 2021"></img>
                          <img src="/interbe_logo2.jpg" alt="interBE Brand identity, 2021"></img>
                      </div>
                      <div className={styles.titlesmall}>Symbol</div>
                      <div className={styles.imgbox}>
                          <img src="/interbe_symbol.jpg" alt="interBE Brand identity, 2021"></img>
                      </div>
                      <div className={styles.titlesmall}>Business Card</div>
                      <div className={styles.beforeafter}>
                        <div className={styles.before}> 
                          <img src="interbe_bc1.jpg" alt="interBE business card" className={styles.imgexplain}></img>
                        </div>
                        <div className={styles.before}> 
                          <img src="interbe_bc2.jpg" alt="interBE business card" className={styles.imgexplain}></img>
                        </div>
                      </div>
                      <div className={styles.imgbox}>
                          <img src="/interbe_mockup.jpg" alt="interBE Brand identity, 2021"></img>
                      </div>
                      <div className={styles.imgbox}>
                          <div><b>Poster</b></div>
                          <img src="/interbe_poster.jpg" alt="interbe Brand identity, 2021"></img>
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

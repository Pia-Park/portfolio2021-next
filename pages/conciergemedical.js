import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Conciergemedical.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { style } from 'dom-helpers';

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function ConciergeMedical() {

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
                Concierge Medical.zip
            </div>
            <div className={styles.contentx}><Link href="/graphicdesign">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                      <img src="/cm_main.jpg" alt="interBE Solutions Branding, 2021"></img>
                  </div>
                  <contenttext className={styles.contenttext}>
                    <textbox className={styles.textbox}>
                      <div className={styles.titlebig}>
                        Concierge Medical Brand Identity, 2021
                      </div>
                      <div><b>Industry</b> Medical</div>
                      <div><b>Mission</b> Logo design indicating that a business related to Medical industry is carried out. Design of various applications using the logo created.</div>
                      <div><b>Website</b> <a href="https://www.conciergemedical.ca/" target="_blank" rel="noreferrer">www.conciergemedical.ca</a></div>
                    </textbox>
                    <br></br>
                    <div className={styles.titlesmall}>Brand Color palette</div>
                    <div className={styles.beforeafter}>
                      <div className={styles.colorbox1}>
                      </div>
                      <div className={styles.colorbox2}>
                      </div>
                    </div>
                    <br></br>
                      <div className={styles.imgbox}>
                          <img src="/cm_logo1.jpg" alt="Concierge Medical Brand identity, 2021"></img>
                          <img src="/cm_logo2.jpg" alt="Concierge Medical Brand identity, 2021"></img>
                      </div>
                      <div className={styles.titlesmall}>Business Card</div>
                      <div className={styles.imgbox}> 
                          <img src="cm_bc.jpg" alt="Concierge Medical business card" className={styles.imgexplain}></img>
                        </div>
                      <div className={styles.imgbox}>
                          <img src="/cm_mockup1.jpg" alt="Concierge Medical Brand identity, 2021"></img>
                      </div>
                      <div className={styles.titlesmall}>Trifold Brochure</div>
                      <div className={styles.imgbox}>
                          <img src="/cm_brochure.jpg" alt="Concierge Medical identity, 2021"></img>
                          <img src="/cm_brochure2.jpg" alt="Concierge Medical identity, 2021"></img>
                      </div>
                      <br></br>
                      <div className={styles.titlesmall}>Graphic for Social Media</div>
                      <div className={styles.beforeafter}>
                          <div className={styles.before}>
                            <img src="/cm_sns1.jpg" alt="Concierge Medical identity, 2021" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/cm_sns2.jpg" alt="Concierge Medical identity, 2021" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/cm_sns3.jpg" alt="Concierge Medical identity, 2021" className={styles.imgexplain}></img>
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

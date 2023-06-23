import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/DatametrexGraphic.module.css'
import Link from 'next/link'
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { style } from 'dom-helpers';

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function DatametrexGraphic() {

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
                Datametrex Graphic.zip
            </div>
            <div className={styles.contentx}><Link href="/graphicdesign">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                      <img src="/DM_main2.jpg" alt="Datametrex Graphic for Social Media, 2022"></img>
                  </div>
                  <contenttext className={styles.contenttext}>
                    <textbox className={styles.textbox}>
                      <div className={styles.titlebig}>
                        Datametrex Graphic for Social Media, 2022
                      </div>
                      <div><b>Industry</b> IT</div>
                      <div><b>Mission</b> Create ads and marketing promotional materials that can convey brand images and promote products.</div>
                      <div><b>Website</b> <a href="https://www.datametrex.com/" target="_blank" rel="noreferrer">www.datametrex.com</a></div>
                    </textbox>
                    <br></br>
                    <br></br>             
                    <div className={styles.titlesmall}>Graphic for Social Media Profile</div>
                    <div className={styles.imgbox}>
                          <img src="/dm_twitter.jpg" alt="Datametrex Advertising, 2022"></img>
                    </div>
                    <br></br>

                    <div className={styles.titlesmall}>Graphic for Social Media Post</div>
                      <div className={styles.beforeafter}>
                          <div className={styles.before}>
                            <img src="/DM_sns1.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns2.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns3.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns4.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns5.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns6.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns7.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns8.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>
                          <div className={styles.before}>
                            <img src="/DM_sns9.jpg" alt="Datametrex Graphic for Social Media, 2022" className={styles.imgexplain}></img>
                          </div>

                      </div>
 
                      <div className={styles.titlesmall}>Advertising </div>
                      <div className={styles.imgbox}>
                          <img src="/DM_ad.jpg" alt="Datametrex Advertising, 2022"></img>
                      </div>

                  </contenttext>
              </div>

            </div>
        </div>
        

      </main>      
    </div>
  )
}

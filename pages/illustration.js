import Head from 'next/head'
import image from 'next/image';
import Link from 'next/link'
import { Fancybox } from "@fancyapps/ui";
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import styles from '../styles/Illustration.module.css'



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
                Illustration
            </div>
            <div className={styles.contentx}><Link href="/">???</Link></div>
            <div className={styles.contentall}>
                <div className={styles.contentdetail}>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Good Morning Pops cover illustration, Photohop, 2010" href="/gmp1.jpg"><img src="/gmp1.jpg" className={styles.detailimg} alt="Good Morning Pops Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Good Morning Pops cover illustration, Photohop, 2010" href="/gmp2.jpg"><img src="/gmp2.jpg" className={styles.detailimg} alt="Good Morning Pops Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Good Morning Pops cover illustration, Photohop, 2010" href="/gmp3.jpg"><img src="/gmp3.jpg" className={styles.detailimg} alt="Good Morning Pops Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Good Morning Pops cover illustration, Photohop, 2010" href="/gmp4.jpg"><img src="/gmp4.jpg" className={styles.detailimg} alt="Good Morning Pops Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Book magazine illustration, Acrylic, 2010" href="/bookillu.jpg"><img src="/bookillu.jpg" className={styles.detailimg} alt="Book Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Water Color, 2009" href="/seoul01.jpg"><img src="/seoul01.jpg" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Water Color, 2009" href="/seoul08.jpg"><img src="/seoul08.jpg" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Water Color, 2009" href="/seoul07.png"><img src="/seoul07.png" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Acrylic, 2009" href="/seoul04.jpg"><img src="/seoul04.jpg" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Acrylic, 2009" href="/seoul02.jpg"><img src="/seoul02.jpg" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Acrylic, 2009" href="/seoul03.jpg"><img src="/seoul03.jpg" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Acrylic, 2009" href="/seoul06.jpg"><img src="/seoul06.jpg" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="Korean Broadcasting Publishing, Newspaper My Friend Seoul illustration, Acrylic, 2009" href="/seoul05.jpg"><img src="/seoul05.jpg" className={styles.detailimg} alt="My Friend Seoul Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="JustBB, Hand Cream Package illustration, Photoshop and Illustrator, 2009" href="/justbbh1.jpg"><img src="/justbbh1.jpg" className={styles.detailimg} alt="JustBB Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="JustBB, Hand Cream Package illustration, Photoshop and Illustrator, 2009" href="/justbbh2.jpg"><img src="/justbbh2.jpg" className={styles.detailimg} alt="JustBB Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="JustBB, Hand Cream Package illustration, Photoshop and Illustrator, 2009" href="/justbbh3.jpg"><img src="/justbbh3.jpg" className={styles.detailimg} alt="JustBB Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="JustBB, Hand Cream Package illustration, Photoshop and Illustrator, 2009" href="/justbbh4.jpg"><img src="/justbbh4.jpg" className={styles.detailimg} alt="JustBB Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="JustBB, Hand Cream Package illustration, Photoshop and Illustrator, 2009" href="/justbbh5.jpg"><img src="/justbbh5.jpg" className={styles.detailimg} alt="JustBB Illustration"/></a>
                  <a data-fancybox="images-i" data-caption="illustration, Oil pastel, 2012" href="/illu.png"><img src="/illu.png" className={styles.detailimg} alt="Illustration for art"/></a>
                  <a data-fancybox="images-i" data-caption="illustration, Oil pastel, 2012" href="/illu1.png"><img src="/illu1.png" className={styles.detailimg} alt="Illustration for art"/></a>
                  <a data-fancybox="images-i" data-caption="illustration, Oil pastel, 2012" href="/illu2.png"><img src="/illu2.png" className={styles.detailimg} alt="Illustration for art"/></a>
                  <a data-fancybox="images-i" data-caption="illustration, Oil pastel, 2012" href="/illu3.png"><img src="/illu3.png" className={styles.detailimg} alt="Illustration for art"/></a>
                  <a data-fancybox="images-i" data-caption="illustration, Oil pastel, 2012" href="/illu4.png"><img src="/illu4.png" className={styles.detailimg} alt="Illustration for art"/></a>
                  <a data-fancybox="images-i" data-caption="illustration, Oil pastel, 2012" href="/illu5.png"><img src="/illu5.png" className={styles.detailimg} alt="Illustration for art"/></a>
                  <a data-fancybox="images-i" data-caption="illustration, Oil pastel, 2012" href="/illu6.png"><img src="/illu6.png" className={styles.detailimg} alt="Illustration for art"/></a>

                </div>

            </div>
        </div>
        
      </main>    
      
    </div>
    
  )
}

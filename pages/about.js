import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function About() {

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
            <Link href="/"><b>PARK INAE</b></Link>
            <Link href="/about">About</Link>
            <Link href="/graphicdesign">Graphic Design</Link>
            <Link href="/webdesign">Web Design</Link>
            <Link href="/illustration">Illustration</Link>
            <Link href="/contact">Contact</Link>
          </menubar>
          <time className={styles.time}>{date}</time>
        </div>

        <div className={styles.contentbox}>
            <div className={styles.contentboxhead}>
                AboutMe.jpg
            </div>
            <div className={styles.contentx}><Link href="/">✕</Link></div>
            <div className={styles.contentdetailall}>
              <div className={styles.contentdetail}>
                  <div className={styles.imgbox}>
                    <img src="/about.jpg" alt="self portrait, oil painting, 2007"></img>
                    <div className={styles.text}>Self Portrait, Oil paiting, 2007</div>
                  </div>
                  <contenttext className={styles.contenttext}>
                      <b>PARK INAE</b><br></br>
                      Graphic / Web Designer / Illustrator<br></br>
                      Experienced graphic designer and illustrator, with skills in print and web design, branding, line drawing, oil painting, package design and photography.  <br></br>
                      <br></br><b>Skills</b><br></br>
                      Adobe Photoshop / Adobe Illustrator<br></br>
                      Adobe Indesign / Adobe Premiere<br></br>
                      Adobe After effect / Adobe XD<br></br>
                      HTML / SASS / CSS / Javascript<br></br>
                      NodeJS / NextJS / React<br></br>
                      Figma / Microsoft office<br></br>
                
                  </contenttext>
              </div>

            </div>
        </div>
        

      </main>      
    </div>
  )
}

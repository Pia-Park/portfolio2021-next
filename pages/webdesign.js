import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Webdesign.module.css'



var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Webdesign() {

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
                Web Design
            </div>
            <div className={styles.contentx}><Link href="/">✕</Link></div>
            <div className={styles.contentall}>
                <div className={styles.contentdetail}>
                <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="JustBB, Web Magazine Design, Photoshop/Illustrator, 2014" href="/justbb.webm">
                      <img src="/webjustbb.png" className={styles.detailimg} alt="JustBB Webzine"/>
                      JustBB.mov
                    </a>
                  </div>
                  <div className={styles.detailbox}>
                    <a className={styles.detail} data-fancybox="video" data-caption="Suntory, locomoa Product Landing Page Design and Illustration, Photoshop/Illustrator, 2019" href="/suntory_lcmr_a.webm">
                      <img src="/lcmr_a.png" className={styles.detailimg} alt="Suntory Locomoa"/>
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
                  <div className={styles.detailbox}>
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
                  </div>
                </div>

            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>
      </main>    
      
    </div>
    
  )
}

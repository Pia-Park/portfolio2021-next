import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Graphicdesign.module.css'



var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Graphicdesign() {

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
            <img src="/icon.png"></img>
            <a href="/"><b>PARK INAE</b></a>
            <a href="/about">About</a>
            <a href="/graphicdesign">Graphic Design</a>
            <a href="/webdesign">Web Design</a>
            <a href="/illustration">Illustration</a>
            <a href="/contact">Contact</a>
          </menubar>
          <time className={styles.time}>{date}</time>
        </div>

        <div className={styles.contentbox}>
            <div className={styles.contentboxhead}>
                Graphic Design
            </div>
            <div className={styles.contentx}><a href="/">✕</a></div>
            <div className={styles.contentall}>
                {/* <div className={styles.contenttitle}>Text</div> */}
                <div className={styles.contentdetail}>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh2.jpg"><img src="/fb_mbh2.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh3.jpg"><img src="/fb_mbh3.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh4.jpg"><img src="/fb_mbh4.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh5.jpg"><img src="/fb_mbh5.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh6.jpg"><img src="/fb_mbh2.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead1.jpg"><img src="/linead1.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead2.jpg"><img src="/linead2.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead3.jpg"><img src="/linead3.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba1.jpg"><img src="/haba1.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba2.jpg"><img src="/haba2.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba3.jpg"><img src="/haba3.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba4.jpg"><img src="/haba4.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba5.jpg"><img src="/haba5.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba6.jpg"><img src="/haba6.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba7.jpg"><img src="/haba7.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl1.jpg"><img src="/fancl1.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl2.jpg"><img src="/fancl2.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl3.jpg"><img src="/fancl3.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl4.jpg"><img src="/fancl4.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl5.jpg"><img src="/fancl5.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl6.jpg"><img src="/fancl6.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-j" data-caption="JustBB, Mask Pack Package Series, Design and Illustration, 2014" href="/justbbmask1.jpg"><img src="/justbbmask1.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-j" data-caption="JustBB, Mask Pack Package Series, Design and Illustration, 2014" href="/justbbmask2.jpg"><img src="/justbbmask2.jpg" className={styles.detailimg}/></a>
                    <a data-fancybox="images-j" data-caption="JustBB, Mask Pack Package Series, Design and Illustration, 2014" href="/justbbmask3.jpg"><img src="/justbbmask3.jpg" className={styles.detailimg}/></a>

                </div>

            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>
      </main>    
      
    </div>
    
  )
}

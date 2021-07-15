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
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh2.jpg"><img src="/fb_mbh2a.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh3.jpg"><img src="/fb_mbh3.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh4.jpg"><img src="/fb_mbh4.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh5.jpg"><img src="/fb_mbh5.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Moobonglim Exhibition Graphic Design, 2015" href="/fb_mbh6.jpg"><img src="/fb_mbh6.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead1.jpg"><img src="/linead1a.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead2.jpg"><img src="/linead2a.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead4.jpg"><img src="/linead4a.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead5.jpg"><img src="/linead5a.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-d" data-caption="Beeeen company, Brand advertisement, 2015" href="/linead3.jpg"><img src="/linead3a.png" className={styles.detailimg}/>Beeeen Company.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba1.jpg"><img src="/haba1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba2.jpg"><img src="/haba2.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba4.jpg"><img src="/haba4.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba5.jpg"><img src="/haba5.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba6.jpg"><img src="/haba6.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba7.jpg"><img src="/haba7.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-h" data-caption="Haba, Cosmetic Advertisement, Photography directing and Design, 2018" href="/haba3.jpg"><img src="/haba3.jpg" className={styles.detailimg}/>HABA.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl1.jpg"><img src="/fancl1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl1-1.jpg"><img src="/fancl1-1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl1-2.jpg"><img src="/fancl1-2.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl2.jpg"><img src="/fancl2.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl2-1.jpg"><img src="/fancl2-1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl3.jpg"><img src="/fancl3.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl3-1.jpg"><img src="/fancl3-1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl4.jpg"><img src="/fancl4.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl5.jpg"><img src="/fancl5.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-f" data-caption="Fancl, Cosmetic Advertisement, Photography directing and Design, 2019" href="/fancl6.jpg"><img src="/fancl6.jpg" className={styles.detailimg}/>FANCL.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-et" data-caption="E-tech Hive, Brand Identity and applications, Design, 2017" href="/etech2.png"><img src="/etech2.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-et" data-caption="E-tech Hive, Brand Identity and applications, Design, 2017" href="/etech3.png"><img src="/etech3.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-et" data-caption="E-tech Hive, Brand Identity and applications, Design, 2017" href="/etech1.jpg"><img src="/etech1.jpg" className={styles.detailimg}/>E techHive.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-m" data-caption="Fujifilm, Metabaria advertisement, Design and Illustration, 2019" href="/meta1.jpg"><img src="/meta1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-m" data-caption="Fujifilm, Metabaria advertisement, Design and Illustration, 2019" href="/meta2.jpg"><img src="/meta2.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-m" data-caption="Fujifilm, Metabaria advertisement, Design and Illustration, 2019" href="/meta4.jpg"><img src="/meta4.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-m" data-caption="Fujifilm, Metabaria advertisement, Design and Illustration, 2019" href="/meta3.jpg"><img src="/meta3.jpg" className={styles.detailimg}/>Fujifilm.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-c" data-caption="Jamcity, Cookie Jam Blast advertisement, Design, 2019" href="/cjblast1.jpg"><img src="/cjblast1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-c" data-caption="Jamcity, Cookie Jam Blast advertisement, Design, 2019" href="/cjblast2.jpg"><img src="/cjblast2.jpg" className={styles.detailimg}/>Jam City.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws1.jpg"><img src="/ws1.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws2.jpg"><img src="/ws2.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws3.jpg"><img src="/ws3.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws4.jpg"><img src="/ws4.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws5.jpg"><img src="/ws5.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws7.jpg"><img src="/ws7.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws8.jpg"><img src="/ws8.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws9.jpg"><img src="/ws9.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws10.jpg"><img src="/ws10.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-w" data-caption="Warship Saga, Warship Saga advertisement, Design, 2018" href="/ws6.jpg"><img src="/ws6.jpg" className={styles.detailimg}/>Warship saga.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-j" data-caption="JustBB, Mask Pack Package Series, Design and Illustration, 2014" href="/justbbmask2.jpg"><img src="/justbbmask2.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-j" data-caption="JustBB, Mask Pack Package Series, Design and Illustration, 2014" href="/justbbmask3.jpg"><img src="/justbbmask3.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-j" data-caption="JustBB, White Series, Package Design and Illustration, 2014" href="/justbb_white1.png"><img src="/justbb_white1.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-j" data-caption="JustBB, White Series, Package Design and Illustration, 2014" href="/justbb_white2.png"><img src="/justbb_white2.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-j" data-caption="JustBB, Mask Pack Package Series, Design and Illustration, 2014" href="/justbbmask1.jpg"><img src="/justbbmask1.jpg" className={styles.detailimg}/>JustBB.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-k" data-caption="KIM'S, Brand Logo, Character and print meterial Desgin, Design, 2011" href="/koreawave5.jpg"><img src="/koreawave5.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-k" data-caption="KIM'S, Brand Logo, Character and print meterial Desgin, Design, 2011" href="/koreawave4.jpg"><img src="/koreawave4.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-k" data-caption="KIM'S, Brand Logo, Character and print meterial Desgin, Design, 2011" href="/koreawave3.png"><img src="/koreawave3.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-k" data-caption="KIM'S, Brand Logo, Character and print meterial Desgin, Design, 2011" href="/koreawave2.jpg"><img src="/koreawave2.jpg" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-k" data-caption="KIM'S, Brand Logo, Character and print meterial Desgin, Design, 2011" href="/koreawave1.jpg"><img src="/koreawave1.jpg" className={styles.detailimg}/>KIM'S.zip</a>
                    </div>
                    <div className={styles.detailbox}>
                        <a className={styles.detail} data-fancybox="images-br" data-caption="Bros, Sanmyeong University and Donduk University Magazine Desgin, Graphic Design, 2017" href="/bros2.png"><img src="/bros2.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-br" data-caption="Bros, Sanmyeong University and Donduk University Magazine Desgin, Graphic Design, 2017" href="/bros3.png"><img src="/bros3.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-br" data-caption="Bros, Sanmyeong University and Donduk University Magazine Desgin, Graphic Design, 2017" href="/bros4.png"><img src="/bros4.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-br" data-caption="Bros, Sanmyeong University and Donduk University Magazine Desgin, Graphic Design, 2017" href="/bros5.png"><img src="/bros5.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-br" data-caption="Bros, Sanmyeong University and Donduk University Magazine Desgin, Graphic Design, 2017" href="/bros6.png"><img src="/bros6.png" className={styles.detailimg}/></a>
                        <a className={styles.detail} data-fancybox="images-br" data-caption="Bros, Sanmyeong University and Donduk University Magazine Desgin, Graphic Design, 2017" href="/bros1.png"><img src="/bros1.png" className={styles.detailimg}/>Bros.zip</a>
                    </div>

                </div>

            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"></script>
      </main>    
      
    </div>
    
  )
}

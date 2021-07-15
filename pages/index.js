import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

var moment = require('moment')
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 


export default function Home() {

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
        <div>
          <a href="/about" className={styles.about}>
            <about className={styles.about}>
              <img src="/about.jpg"></img>
              <boxtext className={styles.boxtext}>
                AboutMe.jpg
              </boxtext>              
            </about>
          </a>
        </div>
        <folders className={styles.folders}>
          <folder className={styles.folder}>
            <a href="/graphicdesign">
              <div className={styles.boxes}>
                <img src="/Graphic Design.png"></img>              
                <boxtext className={styles.boxtext}>
                  Graphic Design
                </boxtext>
              </div>
            </a>
          </folder>
          <folder className={styles.folder}>
            <a href="/webdesign">
              <div className={styles.boxes}>
                <img src="/Web Design.png"></img>              
                <boxtext className={styles.boxtext}>
                  Web Design
                </boxtext>
              </div>
            </a>
          </folder>
          <folder className={styles.folder}>
            <a href="/illustration">
              <div className={styles.boxes}>
                <img src="/illustration.png"></img>              
                <boxtext className={styles.boxtext}>
                  Illustration
                </boxtext>
              </div>
            </a>
          </folder>
        </folders>
        <div>
          <div>
            <a href="/contact" className={styles.contact}>
              <about className={styles.contact}>
                <img src="/contact.jpg"></img>
                <boxtext className={styles.boxtext}>
                  Contact.jpg
                </boxtext>              
              </about>
            </a>

          </div>
        </div>
        <skills>
          <skillsbox className={styles.skillsbox}>
            <skill className={styles.skill}>
              <img src="/Illustrator-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/Photoshop-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/InDesign-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/Premiere-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/XD-96.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/JavaScript-Logo.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/html.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/css.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/react.png"></img>              
            </skill>
            <skill className={styles.skill}>
              <img src="/sass.png"></img>              
            </skill>

          </skillsbox>
          <skillsback>
            <div className={styles.skillsback}>

            </div>
          </skillsback>
        </skills>

      </main>      
    </div>
  )
}

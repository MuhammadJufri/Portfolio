/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { styles } from './HomeStyles.js'

const Home = () => {
  return (
    <section className={styles.homeSection} id="home">
      <div className={styles.homeContent}>
        <span className={styles.homeContentSpan}>Hi, My Name Is</span>
        <h1 className={styles.homeContentHeading}>
          {'Muhammad'.split('').map((item) => (
            <span key={item}>
              {item}
              <wbr />
            </span>
          ))}
          <br />
          Aljufri
        </h1>
        <span className={styles.homeContentTypeWriter}>
          <Typewriter
            loop
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={[
              'A Senior Engineer Based in Bali',
              'Learn the Codesmith(CSX) Coding challenges',
              'Learn The Odin Project Curriculum',
              'Looking for new Opportunities, Hire Me?',
            ]}
            cursorStyle={'|'}
          />
        </span>

        <div className={styles.homeContentButtonWrapper}>
          {['See My Projects', 'Contact Me'].map((item) => (
            <button key={item} className={styles.homeContentButton}>
              {item.split('').map((text) => (
                <span key={text}>
                  {text}
                  <wbr />
                </span>
              ))}
            </button>
          ))}
        </div>
      </div>
      <img
        src="/images/profile.png"
        alt="profile"
        width={250}
        height={300}
        className={styles.homeImage}
      />
    </section>
  )
}

export default Home

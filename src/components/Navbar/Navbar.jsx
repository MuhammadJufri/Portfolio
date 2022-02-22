import React, { useState } from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import { FaTimes } from 'react-icons/fa'
import { styles } from './NavbarStyles.js'

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContentRow1}>
          <a href="/" className={styles.navLogo}>
            <span className={styles.navLogoSpan}>Muha</span>
            mmad
          </a>
          <div className={styles.navMenuToggle}>
            {isToggle ? (
              <FaTimes
                className={styles.navMenuToggleIcon}
                onClick={() => setIsToggle(false)}
              />
            ) : (
              <HiOutlineMenu
                className={styles.navMenuToggleIcon}
                onClick={() => setIsToggle(true)}
              />
            )}
          </div>
        </div>
        <ul
          className={`${!isToggle ? 'md-lgMax:hidden' : 'md-lgMax:flex'} ${
            styles.navMenuList
          }`}
        >
          {['Home', 'Projects', 'About', 'Resume', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsToggle(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

'use client'
import { CiUser, CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { BsChevronDown, BsList } from "react-icons/bs";
import Image from 'next/image';
import styles from './Header.module.css';
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.anouncement}>
        <p>Lorem Ipsum dolar</p>
        <p>Lorem Ipsum dolar</p>
        <p>Lorem Ipsum dolar</p>
      </div>
      <div className={styles.topbar}>
        <div className={styles.leftSection}>
          <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <BsList />
          </div>
          <Image src='/logo.png' alt="Logo" width={32} height={32} />
        </div>

        <div className={styles.logoSection}>
          <div className={styles.logo}>LOGO</div>
        </div>

        <div className={styles.icons}>
          <span><CiSearch /></span>
          <span><CiHeart /></span>
          <span><CiShoppingCart /></span>

          <span className={styles.hideOnMobile}><CiUser /></span>
          <div className={`${styles.language} ${styles.hideOnMobile}`}>
            <p>ENG</p><span><BsChevronDown /></span>
          </div>
        </div>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul>
            <li>PROFILE</li>
            <li>SHOP</li>
            <li>SKILLS</li>
            <li>STORIES</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li> <div className={styles.language}><p>ENG</p><span><BsChevronDown /></span></div></li>
          </ul>
        </div>
      )}
    </header>
  )
}

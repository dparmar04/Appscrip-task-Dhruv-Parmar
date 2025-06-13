'use client';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { CiInstagram, CiLinkedin } from "react-icons/ci"; // use proper icons
import { BsChevronDown } from "react-icons/bs";
import Image from 'next/image';


const AccordionSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={styles.accordionSection}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span><BsChevronDown style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} /></span>
      </div>
      <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeInput}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.contact}>
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div className={styles.currency}>
            <h3>CURRENCY</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src='/US.png' />
              <p style={{ margin: 0 }}>USD</p>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        {isMobile ? (
          <>
            <AccordionSection title="mettā muse">
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </AccordionSection>

            <AccordionSection title="QUICK LINKS">
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </AccordionSection>

            <AccordionSection title="FOLLOW US">
              <div className={styles.socialIcons}>
                <CiInstagram size={24} />
                <CiLinkedin size={24} />
              </div>
            </AccordionSection>

            <div className={styles.paymentSection}>
              <h3>mettā muse ACCEPTS</h3>
              <div className={styles.paymentIcons}>
                <Image src='/payment.png' alt='payment images' width={350} height={30} />
              </div>
            </div>
          </>
        ) : (
          <div className={styles.linksContainer}>
            <div className={styles.column}>
              <h3>mettā muse</h3>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>

            <div className={styles.column}>
              <h3>QUICK LINKS</h3>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

            <div className={styles.Lastcolumn}>
              <h3>FOLLOW US</h3>
              <div className={styles.socialIcons}>
                <CiInstagram size={36} />
                <CiLinkedin size={36} />
              </div>
              <div className={styles.paymentSection}>
                <h3>mettā muse ACCEPTS</h3>
                <div className={styles.paymentIcons}>
                  <Image src='/payment.png' alt='payment images' width={350} height={30} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.copyright}>Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
};

export default Footer;

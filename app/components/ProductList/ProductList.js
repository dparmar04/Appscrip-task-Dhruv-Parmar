'use client';
import Image from 'next/image';
import styles from './ProductList.module.css';
import { CiHeart } from 'react-icons/ci';
import { MdDone } from "react-icons/md";
import { BsChevronDown, BsX } from "react-icons/bs";
import { useState, useEffect } from 'react';

export default function ProductList() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showRecommended, setShowRecommended] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const [openGroups, setOpenGroups] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleGroup = (group) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  const sortOptions = [
    "Recommended",
    "Newest first",
    "Popular",
    "Price : high to low",
    "Price : low to high"
  ];

  const products = [
    { id: 1, name: "Recycle Backpack", image: "/school.png" },
    { id: 2, name: "PPXOC Milkyway Dress In", image: "/dino.png" },
    { id: 3, name: "Product Name", image: "/id_holder.png" },
    { id: 4, name: "HAT", image: "/hat.png" },
    { id: 5, name: "SCHOOL BAG", image: "/school_back.png" },
    { id: 6, name: "SCHOOL BAG", image: "/dino_side.png" },
    { id: 7, name: "WOMEN PURSE", image: "/women_purse_fallen.png" },
    { id: 8, name: "PPXOC Milkyway Dress In", image: "/school.png" },
    { id: 9, name: "Small Pocket", image: "/pouch.png" },
    { id: 10, name: "WOMEN PURSE", image: "/women_purse.png" },
    { id: 11, name: "HAT", image: "/hat.png" },
  ];

  return (
    <div className={styles.main}>
      {/* Updated Sorting Section */}
      <div className={styles.sorting}>
        <div className={styles.category}>
          {isMobile ? (
            <p className={styles.mobileFilterBtn} onClick={() => setShowMobileSidebar(true)}>
              FILTER
            </p>
          ) : (
            <>
              <p style={{ fontWeight: 'bold' }}>3425 Items</p>
              <p className={styles.filter} onClick={() => setShowSidebar(!showSidebar)}>
                <BsChevronDown color='gray' style={{ transform: showSidebar ? 'rotate(90deg)' : 'rotate(-90deg)' }} />
                {showSidebar ? 'Hide Filter' : 'Show Filter'}
              </p>
            </>
          )}
        </div>

        <div className={styles.recommendWrapper}>
          <p className={styles.recommend} onClick={() => setShowRecommended(!showRecommended)}>
            {selectedSort}
            <BsChevronDown color='grey'
              style={{ transform: showRecommended ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
          </p>

          {showRecommended && (
            <div className={styles.recommendDropdown}>
              {sortOptions.map(option => (
                <div key={option} className={styles.dropdownItem}
                  onClick={() => { setSelectedSort(option); setShowRecommended(false); }}>
                  <span>{option}</span>
                  {selectedSort === option && <span><MdDone /></span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.Items}>
        <div className={`${styles.sidebar} ${showSidebar ? styles.sidebarOpen : styles.sidebarClosed}`}>
          <div className={styles.filterGroup}>
            <label><input type="checkbox" /> CUSTOMIZABLE</label>
          </div>

          {renderFilterGroup('IDEAL FOR', 'idealFor', ['Men', 'Women', 'Baby & Kids'])}
          {renderFilterGroup('OCCASION', 'occasion', ['Party', 'Casual', 'Business'])}
          {renderFilterGroup('WORK', 'work', ['N/A'])}
          {renderFilterGroup('FABRIC', 'fabric', ['Cotton', 'Polyster'])}
          {renderFilterGroup('SEGMENT', 'segment', ['N/A'])}
          {renderFilterGroup('SUITABLE FOR', 'suitableFor', ['N/A'])}
          {renderFilterGroup('RAW MATERIALS', 'rawMaterials', ['N/A'])}
          {renderFilterGroup('PATTERN', 'pattern', ['Plain', 'Textured'])}
        </div>

        <div className={`${styles.productList} ${!showSidebar ? styles.fullWidth : ''}`}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageWrapper}>
                {product.status && <div className={styles.badge}>{product.status}</div>}
                <img src={product.image} alt={product.name} className={styles.image} />
              </div>
              <div className={styles.productInfo}>
                <div className={styles.signIn}>
                  <h2>{product.name}</h2>
                  <span className={styles.likeIcon}><CiHeart /></span>
                </div>
                <p style={{ color: 'gray' }}><span href="#" style={{ textDecoration: 'underline' }}>Sign in</span> or Create an account to see pricing</p>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE OVERLAY SIDEBAR */}
      {isMobile && showMobileSidebar && (
        <div className={styles.mobileSidebarOverlay}>
          <div className={styles.mobileSidebar}>
            <div className={styles.mobileSidebarHeader}>
              <p>Filters</p>
              <BsX className={styles.closeBtn} onClick={() => setShowMobileSidebar(false)} />
            </div>

            <div className={styles.mobileSidebarContent}>
              <div className={styles.filterGroup}>
                <label><input type="checkbox" /> CUSTOMIZABLE</label>
              </div>

              {renderFilterGroup('IDEAL FOR', 'idealFor', ['Men', 'Women', 'Baby & Kids'])}
              {renderFilterGroup('OCCASION', 'occasion', ['Party', 'Casual', 'Business'])}
              {renderFilterGroup('WORK', 'work', ['N/A'])}
              {renderFilterGroup('FABRIC', 'fabric', ['Cotton', 'Polyster'])}
              {renderFilterGroup('SEGMENT', 'segment', ['N/A'])}
              {renderFilterGroup('SUITABLE FOR', 'suitableFor', ['N/A'])}
              {renderFilterGroup('RAW MATERIALS', 'rawMaterials', ['N/A'])}
              {renderFilterGroup('PATTERN', 'pattern', ['Plain', 'Textured'])}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  function renderFilterGroup(title, key, options = []) {
    return (
      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup(key)}>
          <h4>{title} <br /><span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span></h4>
          <BsChevronDown className={openGroups[key] ? styles.rotate : ''} />
        </div>
        <div className={`${styles.groupContent} ${openGroups[key] ? styles.open : ''}`}>
          {options.length > 0 && <p style={{ color: 'grey', textDecoration: 'underline' }}>Unselect all</p>}
          {options.map(opt => <label key={opt}><input type="checkbox" /> {opt}</label>)}
        </div>
      </div>
    );
  }
}

'use client'
import { BsChevronDown } from 'react-icons/bs';
import styles from './FilterSidebar.module.css';
import { useState } from 'react';

export default function FilterSidebar() {
  const [openGroups, setOpenGroups] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
  });

  const toggleGroup = (group) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.filterGroup}>
        <label><input type="checkbox" /> CUSTOMIZABLE</label>
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup('idealFor')}>
          <h4>IDEAL FOR <br />
            <span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span>
          </h4>
          <BsChevronDown className={openGroups.idealFor ? styles.rotate : ''} />
        </div>
        {openGroups.idealFor && (
          <>
            <p style={{ color: 'grey', textDecoration: 'underline' }}>Unselect all</p>
            <label><input type="checkbox" /> Men</label>
            <label><input type="checkbox" /> Women</label>
            <label><input type="checkbox" /> Baby & Kids</label>
          </>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup('occasion')}>
          <h4>OCCASION <br />
            <span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span
            ></h4>
          <BsChevronDown className={openGroups.occasion ? styles.rotate : ''} />
        </div>
        {openGroups.occasion && (
          <label>All</label>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup('work')}>
          <h4>WORK  <br /> <span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span> </h4>
          <BsChevronDown className={openGroups.work ? styles.rotate : ''} />
        </div>
        {openGroups.work && (
          <label>All</label>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup('fabric')}>
          <h4>FABRIC  <br /> <span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span> </h4>
          <BsChevronDown className={openGroups.fabric ? styles.rotate : ''} />
        </div>
        {openGroups.fabric && (
          <label>All</label>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup('segment')}>
          <h4>SEGMENT  <br /> <span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span> </h4>
          <BsChevronDown className={openGroups.segment ? styles.rotate : ''} />
        </div>
        {openGroups.segment && (
          <label>All</label>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup('suitableFor')}>
          <h4>SUITABLE FOR  <br /> <span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span> </h4>
          <BsChevronDown className={openGroups.suitableFor ? styles.rotate : ''} />
        </div>
        {openGroups.suitableFor && (
          <label>All</label>
        )}
      </div>

      <div className={styles.filterGroup}>
        <div className={styles.groupHeader} onClick={() => toggleGroup('rawMaterials')}>
          <h4>RAW MATERIALS  <br /> <span style={{ color: 'grey', fontWeight: 'normal', marginTop: '5px' }}>All</span> </h4>
          <BsChevronDown className={openGroups.rawMaterials ? styles.rotate : ''} />
        </div>
        {openGroups.rawMaterials && (
          <label>All</label>
        )}
      </div>
    </aside>
  )
}

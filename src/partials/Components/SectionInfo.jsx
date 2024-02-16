import React from 'react'
import styles from './SectionInfo.module.css'
const SectionInfo = ({name, image, info}) => {
  return (
    <section className={styles.sectionInfo} style={{backgroundImage: `url('${image}')`}}>
        <div className={styles.sectionWrapper}>    
            <div className={`${styles.containerWrapper} container`}>
                <div className={styles.title}>
                <h1 className='margarine'>{name}</h1> 
                </div>
                <div className={styles.info}>
                    <p>{info}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SectionInfo
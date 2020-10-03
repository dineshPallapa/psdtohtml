import React from 'react';
import css from './HeroSection.module.scss';
import image from '../../assets/images/heromansvg.webp';
console.log(image)

const HeroSection = () => {
  return (
    <div className={css.main}>
      <div className={css.captions}>
        <h2 className={css.estimateHeading} >Estimate for</h2>
        <h1 className={css.futureHeading}>Future projects</h1>
        <h3 className={css.deadlineHeading}>Deadlines & upcoming tasks</h3>
        <button className={css.viewProject}>View projects</button>
        <div className={css.wrapBox}>
          <div className={css.card}>
            <div className={css.cloneCard}>O</div>
            <p>Avg watch time1</p>
            <h3>45.42</h3>
            <p>+4.48%</p>
          </div>
          <div className={css.card}>
            <div className={css.cloneCard}>O</div>
            <p>Engagement</p>
            <h3>45.42</h3>
            <p>63.10%</p>
          </div>
          <div className={css.card}>
            <div className={css.cloneCard}>O</div>
            <p>Streams</p>
            <h3>45425</h3>
          </div>
        </div>
      </div>
      <div className={css.heroImage}>
        <img src={image} alt="logo" />
      </div>
    </div>
  )
}

export default HeroSection;

import React from 'react';
import PropTypes from 'prop-types';

import styles from './statistics.module.css';

function index({stats, title}) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

     <ul>
        {stats.map(stat => (
        <li className={styles.item} key={stat.id}>
             <span className={styles.label}>{stat.label}</span>
             <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
        ))}
      </ul>
    </section>
  )
}

index.defaultProps = {
  title: '',
}

index.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.node,
};
export default index;
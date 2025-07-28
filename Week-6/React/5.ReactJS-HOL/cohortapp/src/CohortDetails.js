import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const textColor = props.status === 'ongoing' ? 'green' : 'blue';

  return (
    <div className={styles.box}>
      <h3 style={{ color: textColor }}>{props.title}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{props.status}</dd>
        <dt>Start Date:</dt>
        <dd>{props.date}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;

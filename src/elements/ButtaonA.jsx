import React from 'react'
import styles from './ButtaonA.module.css'

function ButtaonA ({text, link}) {
  return (
    <div>
      <a href={link}>
       <button className={styles.btn} > {text} </button>
      </a>
    </div>
  )
}

export default ButtaonA
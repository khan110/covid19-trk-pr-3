import React from 'react'
import styles from './footer.module.css';

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>
               &copy;{new Date().getFullYear()} Umair A. Khan 
            </p>
        </div>
    )
}

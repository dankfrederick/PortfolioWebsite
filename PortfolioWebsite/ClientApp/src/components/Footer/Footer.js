import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => {
    return (
        <footer>
            <br />
            <p className={styles.p}>This is a React Website designed and built by Dan Frederick.</p>
            <p className={styles.p}> Copywrite 2021 - All Rights Reserved</p>

            {/* TODO: Add generic Privacy Policy and Terms of Use */}
            <a href="#"> Privacy Policy</a><br />
            <a href="#"> Terms of Use</a>
        </footer>

        )
}

export default Footer;
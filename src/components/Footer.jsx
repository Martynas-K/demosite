import React, {Component} from 'react';
import styles from '../styles/scss/Footer.module.scss';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.aboutUsText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor ea et illum, itaque
                            labore rem similique veniam vitae. Asperiores culpa cumque doloremque explicabo impedit
                            magnam minima quas sed ullam!
                        </div>
                        <div className={styles.menuContainer}>
                            <div className={styles.menuList}>
                                <li className={styles.menuListItem}><a href="#" className={styles.menuListItemLink}>HOME</a></li>
                                <li className={styles.menuListItem}><a href="#" className={styles.menuListItemLink}>SERVICE</a></li>
                                <li className={styles.menuListItem}><a href="#" className={styles.menuListItemLink}>WORKS</a></li>
                                <li className={styles.menuListItem}><a href="#" className={styles.menuListItemLink}>ABOUT ME</a></li>
                                <li className={styles.menuListItem}><a href="#" className={styles.menuListItemLink}>CONTACT</a></li>
                            </div>
                            <div className={styles.copyright}><b>&#169; DEMO</b>SITE All rights reserved</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
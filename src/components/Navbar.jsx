import React, {Component} from 'react';
import styles from '../styles/scss/Navbar.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faCaretDown} from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    state =  {
        menuOpen: false,
        windowIsDesktopSize: false,
    };

    setBreakpointWidth = () => {
        return 800;
    };

    componentDidMount = () => {
        this.handleWindowSize();
        window.addEventListener("resize", this.handleWindowSize);
    };

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowSize);
    }

    handleWindowSize = () => {
        let windowIsDesktopSize = window.innerWidth > this.setBreakpointWidth();
        this.setState({
            windowIsDesktopSize
        });
    };

    handleMenuToggle = () => {
        this.setState({
            menuOpen : !this.state.menuOpen
        });
    };

    render() {
        return (
            <div className={styles.navbar}>
                <nav className="container">
                    <div className={styles.navTop}>
                        <ul className={styles.navTopList}>
                            <li className={styles.navTopListItem}><a href="#" className={styles.navTopListItemLink}>MENU</a></li>
                            <li className={styles.navTopListItem}><a href="#" className={styles.navTopListItemLink}>SOME TEXT</a></li>
                            <li className={styles.navTopListItem}><a href="#" className={styles.navTopListItemLink}>ANOTHER ITEM</a></li>
                            <li className={styles.navTopListItem}><a href="#" className={styles.navTopListItemLink}>ONE MORE</a></li>
                            <li className={styles.navTopListItem}><a href="#" className={styles.navTopListItemLink}>AND LAST ONE</a></li>
                        </ul>
                    </div>
                    <div className={styles.navBottom}>
                        <a href="#" className={styles.navLogo}><b>DEMO</b>SITE</a>
                        <div className={styles.mainMenu}>
                            <div className={styles.navbarToggle}>
                                <div className={styles.navbarIcon} onClick={this.handleMenuToggle}>
                                    <FontAwesomeIcon icon={faBars}/>
                                </div>
                            </div>
                            <div className={styles.navMenuContainer + (this.state.menuOpen || this.state.windowIsDesktopSize ? " show" : " hide")}>
                                <div className={styles.dropdownArrow}> </div>
                                <ul className={styles.navMainMenuList}>
                                    <li className={styles.navMainMenuListItem}><a href="#" className={styles.navMainMenuLink}>HOME</a></li>
                                    <li className={styles.navMainMenuListItem}><a href="#" className={styles.navMainMenuLink}>SERVICE</a></li>
                                    <li className={styles.dropdown}>
                                        <button className={styles.dropBtn}>WORKS<FontAwesomeIcon className={styles.caretDownIcon} icon={faCaretDown}/>
                                        </button>
                                        <div className={styles.dropdownShape}>
                                            <div className={styles.dropdownArrow}> </div>
                                            <div className={styles.dropdownList}>
                                                <a className={styles.dropdownListItem} href="#">ALL</a>
                                                <a className={styles.dropdownListItem} href="#">GRAPHIC</a>
                                                <a className={styles.dropdownListItem} href="#">DESIGN</a>
                                                <a className={styles.dropdownListItem} href="#">LOGO</a>
                                                <a className={styles.dropdownListItem} href="#">WEBSITE</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={styles.navMainMenuListItem}><a href="#" className={styles.navMainMenuLink}>ABOUT ME</a></li>
                                    <li className={styles.navMainMenuListItem}><a href="#" className={styles.navMainMenuLink}>CONTACT</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
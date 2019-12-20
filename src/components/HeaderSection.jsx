import React, {Component} from 'react';
import styles from "../styles/scss/Section.module.scss";
import Welcome from "./Welcome";
import Article from "./Article";

class HeaderSection extends Component {
    render() {
        return (
            <div className="container">
                <div className={styles.content}>
                    <Welcome />
                    <Article />
                </div>
            </div>
        );
    }
}

export default HeaderSection;
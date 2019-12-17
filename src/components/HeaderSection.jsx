import React, {Component} from 'react';
import styles from "../styles/scss/Section.module.scss";
import Welcome from "./Welcome";
import Article from "./Article";


class Section extends Component {
    render() {
        return (
            <div className="container">
                asdadadad
                <React.Fragment>
                    <Welcome />
                    <Article />
                </React.Fragment>
            </div>
        );
    }
}

export default Section;
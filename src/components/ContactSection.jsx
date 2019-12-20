import React, {Component} from 'react';
import styles from "../styles/scss/Section.module.scss";
import ContactUs from "./ContactUs";
import MessageUs from "./MessageUs";

class ContactSection extends Component {
    render() {
        return (
            <div className="container">
                <div className={styles.content}>
                    <ContactUs />
                    <MessageUs />
                </div>
            </div>
        );
    }
}

export default ContactSection;
import React, {Component} from 'react';
import styles from "../styles/scss/MessageUs.module.scss";

class MessageUs extends Component {
    onClickLearnMore = () => {
        return console.log('LEARN MORE button clicked!')
    };
    render() {
        return (
            <div className={styles.messageUs}>
                <div className={styles.label}>NAME</div>
                <input className={`${styles.credentialsInput} ${styles.inputStyle}`} type="text"/>
                <div className={styles.label}>EMAIL</div>
                <input className={`${styles.credentialsInput} ${styles.inputStyle}`} type="text" placeholder="test@test.com" autoFocus />
                <div className={styles.label}>MESSAGE</div>
                <textarea className={`${styles.messageInput} ${styles.inputStyle}`}></textarea>
                <div className={styles.btnWrapper}>
                    <button className={styles.btn} onClick={this.onClickLearnMore}>LEARN MORE</button>
                </div>
            </div>
        );
    }
}

export default MessageUs;
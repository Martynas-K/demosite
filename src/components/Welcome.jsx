import React, {Component} from 'react';
import styles from "../styles/scss/Welcome.module.scss";

class Welcome extends Component {
    onClickLearnMore = () => {
        return console.log('LEARN MORE button clicked!')
    };
    render() {
        return (
            <div className={styles.welcome}>
                <div className={styles.headline}>WELCOME</div>
                <div className={styles.banner}></div>
                <div className={styles.welcomeText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet autem beatae cupiditate dicta
                    dolorem esse et eum excepturi facilis harum itaque magnam modi, mollitia odit officiis
                    perferendis praesentium, quam quasi quisquam quo repellendus soluta tempora tempore unde voluptas
                    voluptates?
                </div>
                <div className={styles.btnWrapper}>
                    <button className={styles.btn} onClick={this.onClickLearnMore}>LEARN MORE</button>
                </div>
            </div>
        );
    }
}

export default Welcome;

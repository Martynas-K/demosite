import React, {Component} from 'react';
import styles from "../styles/scss/ContactUs.module.scss";
import { deleteMsg } from '../actions/thanksMsgActions'
import { connect } from 'react-redux';

class ContactUs extends Component {
    handleClick = () => {
        this.props.deleteThanksMsg();
    };

    printThanksMsgs = (array) => {
       return array.length > 0 ? array[0].text : '' ;
    };

    render() {
        const { thanksMsg } = this.props;

        return (
            <div className={styles.contactUs}>
                <div className={styles.headline}>CONTACT</div>
                <div className={styles.banner}></div>
                <p className={styles.contactUsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet autem beatae cupiditate dicta
                    dolorem esse et eum excepturi facilis harum itaque magnam modi, mollitia odit officiis perferendis
                    praesentium, quam quasi quisquam quo repellendus soluta tempora tempore unde voluptas voluptates?
                </p>
                <p className={styles.contactUsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet autem beatae cupiditate dicta
                    dolorem esse et eum excepturi facilis harum itaque magnam modi, mollitia odit officiis perferendis
                    praesentium, quam quasi quisquam quo repellendus soluta tempora tempore unde voluptas voluptates?
                </p>
                <p className={styles.contactUsText}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet autem beatae cupiditate dicta
                    dolorem esse et eum excepturi facilis harum itaque magnam modi, mollitia odit officiis perferendis
                    praesentium, quam quasi quisquam quo repellendus soluta tempora tempore unde voluptas voluptates?
                </p>

                {/*a test button to test redux, deletes first thank you msg*/}
                <div className={styles.contactUsText}>{this.printThanksMsgs(thanksMsg)}</div>
                <button className={styles.welcomeBtn + (thanksMsg.length < 1 ? ' hide' : '')}
                        onClick={this.handleClick}> You're welcome! </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thanksMsg: state.thanksMsg
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteThanksMsg: () => { dispatch(deleteMsg()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
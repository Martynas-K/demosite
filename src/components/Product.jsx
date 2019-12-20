import React, {Component} from 'react';
import styles from "../styles/scss/Product.module.scss";

class Product extends Component {
    render() {
        const {productImgUrl, productDescription} = this.props;
        return (
            <div className={styles.productWrapper}>
                <img className={styles.productImg} src={productImgUrl} alt=""/>
                <div className={styles.productTitle}>
                    <a href="">{productDescription}</a>
                </div>
            </div>
        );
    }
}

export default Product;
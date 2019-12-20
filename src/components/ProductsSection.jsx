import React, {Component} from 'react';
import Product from "./Product";
import Weather from "./Weather";
import { product1, product2 } from '../data/productTypes'
import sectionSetup from "../styles/scss/Section.module.scss";

class ProductsSection extends Component {
    render() {
        return (
            <div className="container">
                <div className={sectionSetup.title}>PRODUCTS</div>
                <div className={sectionSetup.subTitle}>OFFERS TODAY</div>
                <div className={sectionSetup.content}>
                        <Weather/>
                        <div className={sectionSetup.contentInColumn}>
                            <Product productImgUrl={product1.productImg}
                                     productDescription={product1.productDescription}/>
                            <Product productImgUrl={product2.productImg}
                                     productDescription={product2.productDescription}/>
                        </div>
                    </div>
            </div>
        );
    }
}

export default ProductsSection;
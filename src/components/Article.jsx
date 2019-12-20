import React, {Component} from 'react';
import styles from '../styles/scss/Article.module.scss';

class Article extends Component {
    render() {
        return (
            <div className={styles.article}>
                <div className={styles.articleImage}></div>
                <div className={styles.articleContent}>
                    <div className={styles.articleTitle}>UI/UX DESIGN</div>
                    <div className={styles.articleText}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ex laborum magni
                            maiores officia provident quam quibusdam reiciendis! Atque blanditiis deserunt eius enim
                            odio quidem quod recusandae reprehenderit velit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eveniet ex laborum magni
                            maiores officia provident quam quibusdam reiciendis! Atque blanditiis deserunt eius enim
                            odio quidem quod recusandae reprehenderit velit.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;
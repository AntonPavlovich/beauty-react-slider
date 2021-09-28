import React, { Component } from 'react';
import styles from './Slide.module.scss'

class Slide extends Component {
    render() {
        const {alt, src} = this.props
        return (
            <div className={styles.imgWrapper}>
                <img className={styles.img} src={src} alt={alt}/>
            </div>
        );
    }
}

export default Slide;

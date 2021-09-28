import React, { Component } from "react";
import Slide from "../Slide/Slide";
import styles from "./Carousel.module.scss";
import PropTypes from "prop-types";
import SettingsZone from "../SettingsZone/SettingsZone";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      slideShowSpeed: 4000,
    };
    this.timerID = null;
  }

  nextSlide = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    this.setState({
      currentIndex: (currentIndex + 1) % images.length,
    });
  };
  prevSlide = () => {
    const { currentIndex } = this.state;
    const { images } = this.props;
    this.setState({
      currentIndex: (currentIndex + images.length - 1) % images.length,
    });
  };

  slideShow = () => {
    const { slideShowSpeed } = this.state;
    if (!this.timerID) {
      this.timerID = setInterval(() => {
        this.nextSlide();
      }, slideShowSpeed);
    }
  };

  setSlideShowSpeed = (speed) => {
    clearInterval(this.timerID)
    this.timerID = null
    this.setState({
      slideShowSpeed : Number(speed)
    })
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className={styles.wrapper}>
        <SettingsZone
          slideShow={this.slideShow}
          setSpeed={this.setSlideShowSpeed}
        />
        <div className={styles.sliderWrapper}>
          <button
            onClick={this.prevSlide}
            className={`${styles.btn} ${styles.left}`}
          >
            &lt;
          </button>
          <Slide
            src={images[currentIndex].imgPath}
            alt={images[currentIndex].label}
          />
          <button
            onClick={this.nextSlide}
            className={`${styles.btn} ${styles.right}`}
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

const obj = {
  label: PropTypes.string.isRequired,
  impPath: PropTypes.string.isRequired,
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape(obj)),
};

export default Carousel;

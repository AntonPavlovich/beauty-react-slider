import React, { Component } from "react";
import styles from "./Setting.module.scss";

class SettingsZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: "",
    };
  }

  changeState = (value) => {
    this.setState({
      speed: value,
    });
  };

  render() {
    const { slideShow, setSpeed } = this.props;
    return (
      <div className={styles.settingPanel}>
        <h1 className={styles.heading}>Slide show</h1>
        <p>input speed</p>
        <input
          id="input"  
          onChange={({ target }) => this.changeState(target.value)}
          className={styles.input}
        />
        <button onClick={() => setSpeed(this.state.speed)} className={styles.btn}>Submit</button>
        <button onClick={() => slideShow()} className={styles.btn}>
          Slide Show
        </button>
      </div>
    );
  }
}

export default SettingsZone;

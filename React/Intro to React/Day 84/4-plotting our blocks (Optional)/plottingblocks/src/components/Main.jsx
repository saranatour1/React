import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './styles.module.css';

class Main extends Component {


  render() {
    return (
      <section className={styles.main}>
         { this.props.children }
      </section>
    );
  }
}

Main.propTypes = {

};

export default Main;
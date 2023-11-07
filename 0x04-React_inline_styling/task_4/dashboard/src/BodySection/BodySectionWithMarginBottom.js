import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import { StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px'
  }
})

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.marginBottom)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom;
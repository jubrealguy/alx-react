import React, { Component } from 'react'
import PropTypes from "prop-types";

class BodySection extends Component {
    render() {
        const { title, children } = this.props

        return (
            <div className='bodySection'>
                <h2>{title}</h2>
                {children}
                <p title='News from the School'>a paragraph with some random text</p>
            </div>
        )
    }
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection
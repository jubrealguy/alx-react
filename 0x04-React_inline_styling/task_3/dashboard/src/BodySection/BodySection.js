import React, { Component } from 'react'
import PropTypes from "prop-types";

class BodySection extends Component {
    render() {
        const { title, children } = this.props

        return (
            <div className='bodySection'>
                <h2>{title}</h2>
                {children}
                <p title='News from the School'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection
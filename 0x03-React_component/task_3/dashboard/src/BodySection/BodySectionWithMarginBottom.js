import React, {Component} from 'react'
import './BodySectionWithBottom.css'
import PropTypes from 'prop-types'

class BodySectionWithMarginBottom extends Component {
    render() {
        <div className='bodySectionWithMargin'>
            <BodySection {...this.props} />
        </div>
    }
}

BodySectionWithMarginBottom.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

export default BodySectionWithMarginBottom
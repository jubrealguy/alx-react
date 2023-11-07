import React from 'react'
import PropTypes from 'prop-types'

const rowBackground = {
    backgroundColor: '#f5f5f5ab'
}

const headerBackground = {
    backgroundColor: '#deb5b545'
}

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    return (
        <tr style={rowBackground}>
            {isHeader ? 
                (textSecondCell == null ? 
                    (<th colSpan={2} style={headerBackground}>{textFirstCell}</th>)
                    : (
                        <>
                            <th style={headerBackground}>{textFirstCell}</th>
                            <th style={headerBackground}>{textSecondCell}</th>
                        </>
                    )) : (
                        <>
                            <td>{textFirstCell}</td>
                            <td>{textSecondCell}</td>
                        </>
                    )}
        </tr>
    )
}

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
  };

export default CourseListRow
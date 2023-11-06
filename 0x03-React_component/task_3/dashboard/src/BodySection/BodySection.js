import React, { Component } from 'react'

class BodySection extends Component {
    render() {
        const { title, children } = this.props

        return (
            <React.Fragment>
                <div className='bodySection'>
                    <h2>{title}</h2>
                    {children}
                </div>
            </React.Fragment>
        )
    }
}

export default BodySection
import React from 'react'
import BodySection from './BodySection'
import propsTypes from 'prop-types'
import './BodySectionWithMarginBottom.css'

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return <div className='bodySectionWithMargin'>
            <BodySection {...this.props} />
        </div>
    }
}

BodySectionWithMarginBottom.propsTypes = {
    title: propsTypes.string.isRequired,
    children: propsTypes.oneOfType([propsTypes.string, propsTypes.element])
}


export default BodySectionWithMarginBottom;
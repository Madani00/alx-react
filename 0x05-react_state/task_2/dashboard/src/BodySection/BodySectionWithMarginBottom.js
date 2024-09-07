import React from 'react'
import BodySection from './BodySection'
import propsTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'


const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
})
class BodySectionWithMarginBottom extends React.Component {
    render() {
        return <div className={css(styles.bodySectionWithMargin)}>
            <BodySection {...this.props} />
        </div>
    }
}

BodySectionWithMarginBottom.propsTypes = {
    title: propsTypes.string.isRequired,
    children: propsTypes.oneOfType([propsTypes.string, propsTypes.element])
}


export default BodySectionWithMarginBottom;
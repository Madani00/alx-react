import React from 'react'
import propTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    headerRow: {
        backgroundColor: "#deb5b545"
    },
    regularRow: {
        backgroundColor: "#f5f5f5ab"
    },
    td: {
        paddingLeft: '8px'
    }
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {

    return (
        <tr className={isHeader === true ? css(styles.headerRow) : css(styles.regularRow)}>
            {isHeader === true ? (
                (textSecondCell === null) ?
                    (
                        <th colSpan={2}>{textFirstCell}</th>
                    )
                    : (
                        <>
                            <th>{textFirstCell}</th>
                            <th>{textSecondCell}</th>
                        </>
                    )
            ) : (
                <>
                    <td className={css(styles.td)}>{textFirstCell}</td>
                    <td className={css(styles.td)}>{textSecondCell}</td>
                </>
            )
            }
        </tr>
    )
}
CourseListRow.propTypes = {
    isHeader: propTypes.bool,
    textFirstCell: propTypes.string.isRequired,
    textSecondCell: propTypes.oneOfType([propTypes.string, propTypes.number])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow
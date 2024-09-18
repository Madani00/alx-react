import React, { useState } from 'react'
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
    },
    rowChecked: {
        backgroundColor: '#e6e4e4'
    }
});

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckChange = (e) => {
        setChecked(!checked);
    };

    return (
        <tr className={isHeader === true ? css(styles.headerRow) :
            checked ? css(styles.rowChecked) : css(styles.regularRow)}>
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
                    <td className={css(styles.td)}>
                        <input type="checkbox" onChange={handleCheckChange} />
                        {textFirstCell}</td>
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
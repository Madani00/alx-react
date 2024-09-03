import React from 'react'
import propTypes from 'prop-types'

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
    const customStyle = { backgroundColor: "#f5f5f5ab" };
    if (isHeader) customStyle.backgroundColor = "#deb5b545";
    return (
        <tr style={customStyle}>
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
                    <td>{textFirstCell}</td>
                    <td>{textSecondCell}</td>
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
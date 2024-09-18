import React from 'react'
import CourseListRow from './CourseListRow'
import propTypes from 'prop-types'
import CourseShape from './CourseShape'
import { StyleSheet, css } from 'aphrodite'

const styels = StyleSheet.create({
    table: {
        marginTop: '2em',
        border: '2px solid rgba(255, 0, 234, 0.423)',
        width: '100%',
        padding: '0',
    },
    th: {
        borderBottom: '2px solid rgba(255, 0, 234, 0.423)',
        padding: '2px 8px'
    },
    tr: {
        ':nth-child(2)': {
            textAlign: 'left'
        }
    },
    td: {
        padding: '2px 8px'
    }

})

const CourseList = ({ listCourses }) => {
    return (
        <table className={css(styels.table)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>

            <tbody>
                {(listCourses.length === 0) ? (
                    <CourseListRow textFirstCell="No course available yet" />
                ) : (
                    listCourses.map(({ id, name, credit }) =>
                        <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
                    )
                )
                }
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
    listCourses: propTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

export default CourseList
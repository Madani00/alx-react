import React from 'react'
import CourseListRow from './CourseListRow'
import './CourseList.css'
import propTypes from 'prop-types'
import CourseShape from './CourseShape'

const CourseList = ({ listCourses }) => {
    return (
        <table>
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
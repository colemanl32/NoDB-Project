import React from 'react'
import CourseData from  './CourseData'

const Courses = (props) => {
    return (
        <div className = "courses">
            {props.courses.map((element) => {
                return (
                    <CourseData
                        addScore = {props.addScore}
                        key = {element.id}
                        data = {element}
                    />
                )
            })}
        </div>
    )
}
export default Courses
import React from "react";
import Course from "./Course";

const CourseList = function (props) {

    if (!props.courses.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>Courses are not found!</h1>
        )
    }

    return (
        <div>
            <h1>{props.title}</h1>
            {props.courses.map((data) => {
                return (<Course remove={props.remove} data={data} />)
            })}
        </div>
    )
}

export default CourseList
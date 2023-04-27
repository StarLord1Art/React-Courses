import React from "react";
import { useState } from "react";
import MyButton from "./UI/MyButton";
import MyInput from "./UI/MyInput";

const CourseForm = function ({ create }) {
    const [course, setCourse] = useState({ title: '', body: '' })
    //const contentRef = useRef()

    const addNewCourse = (event) => {
        event.preventDefault()
        // console.log(name)
        // console.log(contentRef.current.value)
        // console.log(newCourse)

        const newCourse = {
            ...course, id: Date.now()
        }
        create(newCourse)
        setCourse({ title: '', body: '' })
    }

    return (
        <form className='crt'>
            <MyInput style={{ marginLeft: '0' }} type='text' placeholder='Course name' value={course.title} onChange={(event) => { setCourse({ ...course, title: event.target.value }) }} ></MyInput>
            <MyInput style={{ marginLeft: '0' }} type='text' placeholder='Course description' /*ref={contentRef}*/ value={course.body} onChange={(event) => { setCourse({ ...course, body: event.target.value }) }} ></MyInput>
            <MyButton style={{ marginLeft: '0' }} onClick={addNewCourse} >Create Course</MyButton>
        </form>
    )
}

export default CourseForm
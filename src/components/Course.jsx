import React from "react";
import MyButton from "./UI/MyButton";

const Course = function (props) {
    return (
        <div className='Data'>
            <div className='Content'>
                <h1>{props.data.title}</h1>
                <h4>{props.data.body}</h4>
            </div>
            <div>
                <MyButton onClick={() => { props.remove(props.data) }} className='log_btn'>Delete</MyButton>
            </div>
        </div>
    )
}

export default Course
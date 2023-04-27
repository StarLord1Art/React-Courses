import React from "react";
import { useState } from "react";

const Text = function () {
    const [text, setText] = useState('just a text')
    return (
        <div>
            <h1>{text}</h1>
            <input type='text' value={text} onChange={(event) => { setText(event.target.value) }}></input>
        </div>
    )
}

export default Text
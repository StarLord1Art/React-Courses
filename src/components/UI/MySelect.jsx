import React from "react";

const MySelect = function ({ options, defaultValue, value, onChange }) {
    return (
        <div style={{ marginLeft: '-625px' }}>
            <select value={value} onChange={event => onChange(event.target.value)} >
                <option disabled value=''>{defaultValue}</option>
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.content}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default MySelect
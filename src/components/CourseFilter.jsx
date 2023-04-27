import React from "react";
import MyInput from "./UI/MyInput";
import MySelect from "./UI/MySelect";

const CourseFilter = function ({ filter, setFilter }) {
    return (
        <div>
            <MyInput placeholder='Search...' value={filter.query} onChange={event => setFilter({ ...filter, query: event.target.value })} />
            <MySelect value={filter.sort} onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })} defaultValue='Sorted by ' options={[{ value: 'title', content: 'Name' }, { value: 'body', content: 'Description' }]} />
        </div>
    )
}

export default CourseFilter
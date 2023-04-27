import './App.css';
import CourseList from './components/CourseList';
import { useMemo, useState } from 'react';
import CourseForm from './components/CourseForm';
import CourseFilter from './components/CourseFilter';
import MyModal from './components/UI/MyModal';
import MyButton from './components/UI/MyButton';


function App() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'REACT_01', body: 'course description' },
    { id: 2, title: 'REACT_02', body: 'course content' },
    { id: 3, title: 'REACT_03', body: 'text of the course' },
    { id: 4, title: 'REACT_04', body: 'new text version' },
    { id: 5, title: 'REACT_05', body: 'final text version' }
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)

  const sortedCourses = useMemo(() => {
    if (filter.sort) {
      return ([...courses].sort((a, b) => { return (a[filter.sort].localeCompare(b[filter.sort])) }))
    } else {
      return (courses)
    }
  }, [filter.sort, courses])

  const sortedAndSearchedCourses = useMemo(() => {
    return (sortedCourses.filter(course => course.title.toLowerCase().includes(filter.query)))
  }, [filter.query, sortedCourses])

  const createCourse = (newCourse) => {
    setCourses([...courses, newCourse])
    setModal(false)
  }
  const removeCourse = (data) => {
    setCourses(courses.filter(p => p.id !== data.id))
  }

  return (
    <div className="App">
      <hr style={{ margin: '15px 0', width: '50%', marginLeft: '400px' }} />
      <CourseFilter filter={filter} setFilter={setFilter} />
      <CourseList title='React Courses 2.0' courses={sortedAndSearchedCourses} remove={removeCourse} />
      <MyModal visible={modal} setVisible={setModal}>
        <CourseForm create={createCourse} />
      </MyModal>
      <MyButton onClick={() => setModal(true)} style={{ marginBottom: '50px' }}>Create Course</MyButton>
    </div>
  );
}

export default App;
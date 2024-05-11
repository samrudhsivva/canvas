import './App.css';
import { Login } from './components/loginPage.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FacultyHomePage from './components/facultyHome.js';
import StudentDetails from './components/studentDetails.js';
import { courses } from './JSON_DataFiles/courses.js';
import studentCourses from './JSON_DataFiles/studentCourses.js';
import AdminDashboard from './components/adminHome.js';
import { faculties, students, semesters, course } from './JSON_DataFiles/adminMock.js';
import Student from './components/Student.js';
import CourseDetailPage from './components/coursePage.js';
import { FacultyCourses } from './components/facultyCourses.js';
import Grades from './components/Grades.js';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div><h3>LMS Application </h3></div>
          {/* <Link to="/">LoginPage</Link> */}
          {/* <Link to="/faculty">Faculty HomePage</Link>
          <Link to="/student">Student HomePage</Link>
          <Link to="/adminH">Admin HomePage</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/faculty" element={< FacultyHomePage courses={courses} />} />
          <Route path="/student" element={< Student studentCourses={studentCourses} />} />
          <Route path="/faculty/courses" element={<FacultyCourses />} />
          <Route path="/faculty/coursePage" element={<CourseDetailPage />} />
          <Route path="/admin" element={< AdminDashboard faculties={faculties} semesters={semesters} course={course} students={students} />} />
          <Route path="/faculty/courses/grades/:studentId" element={<Grades />} />
          <Route path="/studentDetails/:studentId" element={<StudentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

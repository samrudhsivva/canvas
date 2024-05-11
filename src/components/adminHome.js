import React, { useState } from 'react';
import './AdminDashboard.css'; // Assume basic styling is defined here

const AdminDashboard = ({ faculties, semesters, course, students }) => {
  const [selectedFaculty, setSelectedFaculty] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAssignCourse = (e) => {
    e.preventDefault();
    // Logic to assign the selected course to the faculty for the new semester
    console.log(`Assigning ${selectedCourse} to ${selectedFaculty} for ${selectedSemester}`);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <section className="assign-course">
        <h2>Assign a Course to Faculty</h2>
        <form onSubmit={handleAssignCourse}>
          <select value={selectedFaculty} onChange={e => setSelectedFaculty(e.target.value)} required>
            <option value="">Select Faculty</option>
            {faculties.map(faculty => (
              <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
            ))}
          </select>
          
          <select value={selectedSemester} onChange={e => setSelectedSemester(e.target.value)} required>
            <option value="">Select Semester</option>
            {semesters.map(semester => (
              <option key={semester} value={semester}>{semester}</option>
            ))}
          </select>

          <select value={selectedCourse} onChange={e => setSelectedCourse(e.target.value)} required>
            <option value="">Select Course</option>
            {course.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          <button type="submit">Assign Course</button>
        </form>
      </section>
      
      {/* Additional UI sections for viewing courses by faculty and students by course could be added here */}
      
    </div>
  );
};

export default AdminDashboard;

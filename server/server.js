
import { courses } from '../src/JSON_DataFiles/courses.js';
import studentCourses from '../src/JSON_DataFiles/studentCourses.js';
import { faculties } from '../src/JSON_DataFiles/adminMock.js';
import { students } from '../src/JSON_DataFiles/adminMock.js';
import { semesters } from '../src/JSON_DataFiles/adminMock.js';
import { syllabus } from '../src/JSON_DataFiles/syllabus.js';
import grades from '../src/JSON_DataFiles/grades.js';
import { announcements } from '../src/JSON_DataFiles/announcements.js';
import { assignments } from '../src/JSON_DataFiles/assignments.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { users } from '../src/JSON_DataFiles/users.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// Courses CRUD Operations
app.get('/api/courses', (req, res) => {
  console.log("get courses is called");
  res.send(courses);
});

app.post('/api/courses', (req, res) => {
  const newCourse = { ...req.body, id: courses.length + 1 };
  courses.push(newCourse);
  res.status(201).send(newCourse);
});

app.put('/api/courses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = courses.findIndex(course => course.id === id);
  if (index >= 0) {
    courses[index] = { ...courses[index], ...req.body };
    res.send(courses[index]);
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});

app.delete('/api/courses/:id', (req, res) => {
  let id = parseInt(req.params.id);
  let index = courses.findIndex(course => course.id === id);
  if (index >= 0) {
    courses = courses.filter(course => course.id !== id);
    res.status(204).send();
  } else {
    res.status(404).send({ message: 'Course not found' });
  }
});


app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users/:role', (req, res) => {
  const { role } = req.params;
  const newUser = req.body;

  if (users[role]) {
    users[role].push(newUser);
    res.status(201).send(newUser);
  } else {
    res.status(404).send('Role not found');
  }
});

app.put('/users/:role/:id', (req, res) => {
  const { role, id } = req.params;
  const userIndex = users[role].findIndex(user => user.id === id);

  if (userIndex !== -1) {
    users[role][userIndex] = { ...users[role][userIndex], ...req.body };
    res.send(users[role][userIndex]);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/users/:role/:id', (req, res) => {
  const { role, id } = req.params;
  const userIndex = users[role].findIndex(user => user.id === id);

  if (userIndex !== -1) {
    users[role].splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

app.get('/syllabus', (req, res) => {
  res.json(syllabus);
});

app.post('/syllabus', (req, res) => {
  const newSyllabus = req.body;
  syllabus.push(newSyllabus);
  res.status(201).send(newSyllabus);
});

app.put('/syllabus/:courseId', (req, res) => {
  const { courseId } = req.params;
  const syllabusIndex = syllabus.findIndex(s => s.courseId === courseId);

  if (syllabusIndex !== -1) {
    syllabus[syllabusIndex] = { ...syllabus[syllabusIndex], ...req.body };
    res.send(syllabus[syllabusIndex]);
  } else {
    res.status(404).send('Syllabus not found');
  }
});

app.put('/syllabus/:courseId', (req, res) => {
  const { courseId } = req.params;
  const syllabusIndex = syllabus.findIndex(s => s.courseId === courseId);

  if (syllabusIndex !== -1) {
    syllabus[syllabusIndex] = { ...syllabus[syllabusIndex], ...req.body };
    res.send(syllabus[syllabusIndex]);
  } else {
    res.status(404).send('Syllabus not found');
  }
});

app.get('/grades', (req, res) => {
  res.json(grades);
});

app.post('/grades', (req, res) => {
  const newGrades = req.body;
  grades.push(newGrades);
  res.status(201).send(newGrades);
});

app.get('/assignments', (req, res) => {
  res.json(assignments);
});
app.post('/assignments', (req, res) => {
  const newAssignment = req.body;
  assignments.push(newAssignment);
  res.status(201).send(newAssignment);
});

app.put('/assignments/:courseId', (req, res) => {
  const { courseId } = req.params;
  const courseIndex = assignments.findIndex(a => a.courseId === courseId);

  if (courseIndex !== -1) {
    assignments[courseIndex] = { ...assignments[courseIndex], ...req.body };
    res.send(assignments[courseIndex]);
  } else {
    res.status(404).send('Assignments not found');
  }
});

app.delete('/assignments/:courseId', (req, res) => {
  const { courseId } = req.params;
  const courseIndex = assignments.findIndex(a => a.courseId === courseId);

  if (courseIndex !== -1) {
    assignments.splice(courseIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Assignments not found');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import React, { useState } from "react";
import studentCourses from "../JSON_DataFiles/studentCourses.js";

const Course = () => {
    const [courseId, setCourseId] = useState("");
    const [course, setCourse] = useState(null);
    const [announcement, setAnnouncement] = useState("");
    const [assignment, setAssignment] = useState("");
    const [quiz, setQuiz] = useState("");
    const [syllabusContent, setSyllabusContent] = useState("");

    const handleCourseIdChange = (event) => {
        setCourseId(event.target.value);
    };

    const fetchCourse = () => {
        const foundCourse = studentCourses.find(course => course.id === courseId);
        setCourse(foundCourse || null);
    };

    const addAnnouncement = () => {
        if (course) {
            course.announcements.push(announcement);
            setCourse({ ...course });
            setAnnouncement("");
        }
    };

    const addAssignment = () => {
        if (course) {
            course.assignments.push(assignment);
            setCourse({ ...course });
            setAssignment("");
        }
    };

    const addQuiz = () => {
        if (course) {
            course.quizzes.push(quiz);
            setCourse({ ...course });
            setQuiz("");
        }
    };

    const addSyllabusContent = () => {
        if (course) {
            course.syllabus += ` ${syllabusContent}`;
            setCourse({ ...course });
            setSyllabusContent("");
        }
    };

    return (
        <div>
            <h1>Course Management</h1>
            <div>
                <label>Enter Course ID: </label>
                <input type="text" value={courseId} placeholder="course-001" onChange={handleCourseIdChange} />
                <button onClick={fetchCourse}>Fetch Course</button>
            </div>
            {course ? (
                <div>
                    <h2>{course.name}</h2>
                    <div>
                        <h3>Content</h3>
                        <p>{course.content}</p>
                    </div>
                    <div>
                        <h3>Syllabus</h3>
                        <p>{course.syllabus}</p>
                        <input
                            type="text"
                            value={syllabusContent}
                            onChange={(e) => setSyllabusContent(e.target.value)}
                            placeholder="Add Syllabus Content"
                        />
                        <button onClick={addSyllabusContent}>Add to Syllabus</button>
                    </div>
                    <div>
                        <h3>Announcements</h3>
                        <ul>
                            {course.announcements.map((announcement, index) => (
                                <li key={index}>{announcement}</li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            value={announcement}
                            onChange={(e) => setAnnouncement(e.target.value)}
                            placeholder="Add Announcement"
                        />
                        <button onClick={addAnnouncement}>Post Announcement</button>
                    </div>
                    <div>
                        <h3>Assignments</h3>
                        <ul>
                            {course.assignments.map((assignment, index) => (
                                <li key={index}>{assignment}</li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            value={assignment}
                            onChange={(e) => setAssignment(e.target.value)}
                            placeholder="Add Assignment"
                        />
                        <button onClick={addAssignment}>Add Assignment</button>
                    </div>
                    <div>
                        <h3>Quizzes</h3>
                        <ul>
                            {course.quizzes.map((quiz, index) => (
                                <li key={index}>{quiz}</li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            value={quiz}
                            onChange={(e) => setQuiz(e.target.value)}
                            placeholder="Add Quiz"
                        />
                        <button onClick={addQuiz}>Add Quiz</button>
                    </div>
                </div>
            ) : (
                <p>No course found for ID: {courseId}</p>
            )}
        </div>
    );
};

export default Course;

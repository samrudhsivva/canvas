To test the APIs via Postman, you will need to set up requests for each of the CRUD operations for `users`, `syllabus`, `grades`, `assignments`, and `courses`. Below are sample Postman requests you can create for each:

### General Setup for All Requests
Before making the requests, ensure your server is running and accessible. Typically, if you're running locally, your base URL will be something like `http://localhost:3000`.

### Users

#### GET /users
- **Method**: GET
- **URL**: `http://localhost:3000/users`
- **Body**: None

#### POST /users/:role (Example: Adding a faculty)
- **Method**: POST
- **URL**: `http://localhost:3000/users/faculty`
- **Body** (JSON):
```json
{
  "id": "faculty-003",
  "name": "Michael Lee",
  "courses": ["course-003"]
}
```

#### PUT /users/:role/:id (Example: Updating a student)
- **Method**: PUT
- **URL**: `http://localhost:3000/users/students/student-001`
- **Body** (JSON):
```json
{
  "name": "Alice Johnson",
  "enrolledCourses": ["course-002"]
}
```

#### DELETE /users/:role/:id (Example: Deleting an admin)
- **Method**: DELETE
- **URL**: `http://localhost:3000/users/admins/admin-001`
- **Body**: None

### Syllabus

#### GET /syllabus
- **Method**: GET
- **URL**: `http://localhost:3000/syllabus`
- **Body**: None

#### POST /syllabus
- **Method**: POST
- **URL**: `http://localhost:3000/syllabus`
- **Body** (JSON):
```json
{
  "courseId": "course-003",
  "content": "Introduction to Data Science..."
}
```

#### PUT /syllabus/:courseId (Example: Update course-001)
- **Method**: PUT
- **URL**: `http://localhost:3000/syllabus/course-001`
- **Body** (JSON):
```json
{
  "content": "Updated content for the basics of programming."
}
```

#### DELETE /syllabus/:courseId (Example: Delete course-002)
- **Method**: DELETE
- **URL**: `http://localhost:3000/syllabus/course-002`
- **Body**: None

### Grades

#### GET /grades
- **Method**: GET
- **URL**: `http://localhost:3000/grades`
- **Body**: None

#### POST /grades (Adding new grades)
- **Method**: POST
- **URL**: `http://localhost:3000/grades`
- **Body** (JSON):
```json
{
  "studentId": "student-002",
  "courseId": "course-002",
  "grades": {
    "assignment-002": "B",
    "quiz-002": "A"
  }
}
```

### Assignments

#### GET /assignments
- **Method**: GET
- **URL**: `http://localhost:3000/assignments`
- **Body**: None

#### POST /assignments (Adding new assignments)
- **Method**: POST
- **URL**: `http://localhost:3000/assignments`
- **Body** (JSON):
```json
{
  "courseId": "course-003",
  "assignments": [
    {
      "id": "assignment-003",
      "title": "Final Project",
      "dueDate": "2024-12-15"
    }
  ],
  "quizzes": [
    {
      "id": "quiz-003",
      "title": "End of Semester Quiz",
      "date": "2024-11-30"
    }
  ]
}
```

### Courses

#### GET /courses
- **Method**: GET
- **URL**: `http://localhost:3000/courses`
- **Body**: None

#### POST /courses
- **Method**: POST
- **URL**: `http://localhost:3000/courses`
- **Body** (JSON):
```json
{
  "courseId": "course-004",
  "content": "Machine Learning Fundamentals..."
}
```

#### PUT /courses/:courseId (Example: Update course-004)
- **Method**: PUT
- **URL**: `http://localhost:3000/courses/course-004`
- **Body** (JSON):
```json
{
  "content": "Advanced Machine Learning Topics"
}
```

#### DELETE /courses/:courseId (Example: Delete course-004)
- **Method**: DELETE
- **URL**: `http://localhost:3000/courses/course-004`

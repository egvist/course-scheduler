# TU Dresden Course Scheduler

A simple web app for planning and managing Master’s Computer Science courses at TU Dresden. I built it because scheduling was way too confusing. It could work even better with a database to store course details, and it can easily be adapted for other university programs. **Right now, it’s more of a prototype for future development.**


### Note: Hardcoded Data
This application uses hardcoded course data because there is no direct access to TU Dresden's course database. All course information is manually maintained in the `courseData` array in `script.js`.

### Adding New Courses
Edit the `courseData` array in `script.js`:

```javascript
{
    id: "COURSE-ID",
    name: "Course Name",
    hours: "2/2/0", 
    language: "english", 
    lecturer: "Prof. Name",
    institute: "Institute Name",
    specialization: "theory", // key word for specilization
    sessions: [
        { type: "V", day: "Montag", slot: "2.", room: "ROOM", week: "wöchentlich" }
    ]
}
```

### Modifying Specializations
Update the `specializationMapping` object in `script.js`:

```javascript
const specializationMapping = {
    "theory": "Theoretical Computer Science and Symbolic Artificial Intelligence",
    "software": "Software Technology and Programming Languages",
    // ...
};
```






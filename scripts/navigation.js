// Navigation hamburger menu
const navButton = document.querySelector("#ham-btn");
const navLinks = document.querySelector("#nav-bar");

if (navButton && navLinks) {
    navButton.addEventListener("click", () => {
        navButton.classList.toggle("show");
        navLinks.classList.toggle("show");
    });
}


// Courses array
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        completed: false
    }
];


// Display courses
const courseList = document.querySelector("#course-list");
const creditDisplay = document.querySelector("#credits");


function displayCourses(filter = "ALL") {

    courseList.innerHTML = "";

    let filteredCourses = courses;


    if (filter !== "ALL") {
        filteredCourses = courses.filter(
            course => course.subject === filter
        );
    }


    filteredCourses.forEach(course => {

        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${course.subject}${course.number}</strong>
            - ${course.title}
            <br>
            Credits: ${course.credits}
        `;


        if (course.completed) {
            li.classList.add("completed");
        }


        courseList.appendChild(li);

    });


    // Calculate credits using reduce()
    const totalCredits = filteredCourses.reduce(
        (total, course) => total + course.credits,
        0
    );


    creditDisplay.textContent = `Total Credits: ${totalCredits}`;

}


// Initial display
displayCourses();


// Filters
document.querySelector("#all").addEventListener(
    "click",
    () => displayCourses("ALL")
);


document.querySelector("#cse").addEventListener(
    "click",
    () => displayCourses("CSE")
);


document.querySelector("#wdd").addEventListener(
    "click",
    () => displayCourses("WDD")
);


// Footer year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();


// Footer last modified
document.querySelector("#lastModified").textContent =
    "Last Modified: " + document.lastModified;

// Modal
const courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {

    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Certificate:</strong> ${course.certificate || "Web and Computer Programming"}</p>
        <p>${course.description || "Course information available."}</p>
        <p><strong>Technologies:</strong> ${course.technology ? course.technology.join(", ") : "HTML, CSS, JavaScript"}</p>
    `;

    courseDetails.showModal();

    const closeModal = document.querySelector("#closeModal");

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });

}


// Close modal when clicking outside
courseDetails.addEventListener("click", (event) => {
    if (event.target === courseDetails) {
        courseDetails.close();
    }
});


// Open modal when clicking a course
document.querySelectorAll("#course-list li").forEach((courseDiv, index) => {

    courseDiv.addEventListener("click", () => {
        displayCourseDetails(courses[index]);
    });

});
// store the selected elements that we are going to use.
const navbuttom = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');

// Toggle the show class off and on
navbuttom.addEventListener('click', () => {
    navbuttom.classList.toggle('show');
    navlinks.classList.toggle('show');

});

// o teu array fica EXATAMENTE igual (não mexi nele)
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming.',
        technology: ['HTML', 'CSS'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students learn functions, debugging, and problem solving.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Introduction to classes, inheritance and polymorphism.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'JavaScript, interactivity and dynamic websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'UX, accessibility, performance and APIs.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

const list = document.getElementById("course-list");

function displayCourses(filter = "ALL") {
    list.innerHTML = "";

    let filtered = courses;

    if (filter !== "ALL") {
        filtered = courses.filter(c => c.subject === filter);
    }

    filtered.forEach(course => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${course.subject} ${course.number}</strong> - ${course.title}
        `;

        if (course.completed) {
            li.classList.add("completed");
        }

        list.appendChild(li);
    });
}

displayCourses();

/* filtros */
document.getElementById("all").addEventListener("click", () => displayCourses("ALL"));
document.getElementById("cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("WDD"));

const currentYear = document.getElementById("currentyear");
currentYear.textContent = new Date().getFullYear();


const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;

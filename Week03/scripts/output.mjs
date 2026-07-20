export function setTitle(course) {


    document.querySelector("#courseName")
        .textContent = course.name;


    document.querySelector("#courseCode")
        .textContent = course.code;

}



export function renderSections(sections) {


    const output =
        document.querySelector("#sections");


    output.innerHTML = "";


    sections.forEach((section) => {


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${section.sectionNum}</td>

            <td>${section.enrolled}</td>

            <td>${section.instructor}</td>

        `;


        output.appendChild(row);


    });

}
const byuiCourse = {

    name: "Web Frontend Development",
    code: "WDD231",

    sections: [
        {
            sectionNum: 1,
            enrolled: 25,
            instructor: "Prof. Smith"
        },
        {
            sectionNum: 2,
            enrolled: 28,
            instructor: "Prof. Jones"
        },
        {
            sectionNum: 3,
            enrolled: 20,
            instructor: "Prof. Brown"
        }
    ],


    changeEnrollment(sectionNum, add = true) {

        const section = this.sections.find(
            section => section.sectionNum === sectionNum
        );


        if (add) {

            section.enrolled++;

        } else {

            section.enrolled--;

        }

    }

};


export default byuiCourse;
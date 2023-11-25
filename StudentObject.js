function sDetails(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks;

    this.printTop3Subjects = function () {

        let sortedSubjects = Object.keys(this.marks_of_5_subjects).sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
        let top3Subjects = sortedSubjects.slice(0, 3);

        let top3SubjectNames = top3Subjects.map((subject) => {
            return `${subject}-${this.marks_of_5_subjects[subject]}`;
        });

        console.log("Top Three Subjects - ");
        console.log(top3SubjectNames.join('\n'));
    };

    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}  |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.class}      |`);
        console.log(`| Section  - ${this.section}       |`);
        
 
        for (let subject in this.marks_of_5_subjects) {
            console.log(`| ${subject}  - ${this.marks_of_5_subjects[subject]} |`);
        }

        let totalMarks = Object.values(this.marks_of_5_subjects).reduce((sum, mark) => sum + mark, 0);
        let percentage = (totalMarks / Object.keys(this.marks_of_5_subjects).length).toFixed(1);
        console.log(`| Percentage - ${percentage} % |`);
        console.log("+--------------------+");
    };
}



let student = new sDetails("Pradeep", 21, "XII", "A", 

{
    science: 72,
    maths: 75,
    s_science: 79,
    english: 80,
    hindi: 67
});

student.printTop3Subjects();
student.printReportCard();

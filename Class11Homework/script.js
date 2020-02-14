function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => {
        return this.firstName + this.lastName
    }
}

function Student(firstName, lastName, age, academyName, studentId){

    Object.setPrototypeOf(this, new Person(firstName, lastName, age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = () => {
       console.log(`The student ${this.firstName} is studyng in the ${this.academyName}`)
    } 
}

let student1 = new Student('Jane', 'Sandanski', 35, 'SEDC', 007)
student1.study();
let student2 = new Student('Nikola', 'Karev', 30, 'SEDC', 005)
student2.study();

Person.prototype.getStudentAcademy = (student) => {
    return student.academyName
}

function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth){

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Design Academy', studentId))
    this.isStudentOfTheMonth = false;
    this.attendAdobeExam = () => {
        console.log(`The student ${this.firstName} is doing an adobe exam`)
    }
}


function CodeStudent(firstName, lastName, age, studentId){

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Code Academy', studentId))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = (type) => {
        if(type === 'individual'){
            this.hasIndividualProject = true;
            console.log(`The student ${firstName} is working on the project ${type}`)
        }
        else if (type === 'group'){
            this.hasGroupProject = true;
            console.log(`The student ${firstName} is working on the project ${type}`)
        }
    }
}


function NetworkStudent(firstName, lastName, age, studentId){

    Object.setPrototypeOf(this, new Student(firstName, lastName, age, 'Network Academy', studentId))
    this.academyPart = 2;
    this.attendCiscoExam = () => {
        console.log(`the student ${firstName} is doing a cisco exam`)
    }
 
}

let student3 = new DesignStudent('Pitu', 'Guli', 22, 2345, true)
console.log(student3)
student3.attendAdobeExam();
let student4 = new CodeStudent('Dame', 'Gruev', 25, 568)
student4.doProject('group')
console.log(student4)
let student5 = new NetworkStudent('Vangel', 'Dinu', 19, 698)
console.log(student5)
student5.attendCiscoExam();
student5.getStudentAcademy(student5)

function Teacher(firstName, lastName, age, academyName, studentId, subject){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId))
    this.subject = subject;
    this.academy
    this.teach = () => {
        console.log(`The teacher ${this.getFullName()} is teaching ${subject}`)
    }
}
let teacher = new Teacher('Goce', 'Delcev', 42, 'SEDC', 985, 'JS');
console.log(teacher)
teacher.teach();

// Create a Teacher constructor function that inherits from Person and has:
// subject
// teach - method that writes in the console: The teacher [fullName] is teaching [subject]
// Modify the prototype of Teacher so both Teacher and Student will have id and academyName
function Academy(name, students, subjects, start, end) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClases = 10 * this.subjects.length;
    this.printStudents = function(){
        console.log(this.students)
    };
    this.printSubjects = function(){
        console.log(this.subjects)
    }

};

function Subject(title, isElective, academy, students){
    this.title = title;
    this.numberOfClases = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = function(number){
        if(number > 3){
        this.numberOfClases = number;
        }else{
            console.log(`insert number higher than 3`)
        }
    }
};

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (academy){
        this.academy = academy;
        this.academy.students.push(firstName, lastName)
    };
    this.startSubject = function (subject){
        if(this.academy){
            let containsElement = this.academy.subjects.includes(subject);
            if( containsElement){
                this.currentSubject = subject;
                this.subject.students.push(firstName, lastName);
                if(this.currentSubject !== null){
                    this.completedSubjects.push(this.currentSubject);
                }
            }else{
                console.log(`There is an error`)
            }
        }
        
    }
}
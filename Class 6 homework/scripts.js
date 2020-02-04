$(document).ready(function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd8-04-ajs/master/g6/Class06/materials/students.json",
        success: function(data){
            let students = JSON.parse(data);
            console.log(students);

            let averageGradeAbove3 = students
            .filter(students => students.averageGrade >= 3)
            .map(students => `${students.firstName} ${students.lastName}`);
            console.log(averageGradeAbove3);

            let femaleStudentAbove5 = students
            .filter(students => students.averageGrade >= 5)
            .filter(students => students.gender = "Female")
            .map(students => `${students.firstName} ${students.lastName}`);
            console.log(femaleStudentAbove5);

            let maleStudentSkopjeAbove18Old = students
            .filter(students => students.gender = "Male")
            .filter(students => students.city = "Skopje")
            .filter(students => students.age >= 35)
            .map(students => `${students.firstName} ${students.lastName}`);
            console.log(maleStudentSkopjeAbove18Old);

            let averageGradesFemaleSudentsabove24 = students
            .filter(students => students.gender = "Female")
            .filter(students => students.age >= 24)
            .map(students => `${students.firstName} ${students.lastName}, Average Grade:${students.averageGrade}`);
            console.log(averageGradesFemaleSudentsabove24);

            let maleNameStartsWithB = students
            .filter(students => students.gender = "Male")
            .filter(students => students.name.startsWith("B"))
            .filter(students => students.averageGrade >= 2)
            .map(students => `${students.firstName} ${students.lastName}`);
            console.log(maleNameStartsWithB);
            
        },
        error: function(error){
            console.log(error);
        }
    });
});
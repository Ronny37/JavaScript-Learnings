const student = {
    fullName : "rahul",
    gpa : 9,
    ispass : true,
    age :20,


};

console.log(student.age);
console.log(student["ispass"])


student["age"] = student["age"] + 1 ;
console.log(student.age);


student["name"] = "mustafa";
console.log(student.name);


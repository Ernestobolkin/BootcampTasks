const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson(type, id) {
    if (!this[type]) {
      return "Type Not Found";
    }
    return this[type].find((element) => element.id === id);
  },
};

//1
// console.log(school.findPerson('students',10))

//2
const assignStudent = (id, subj) => {
  const students = school.students;
  const teachers = school.teachers;
  const stuId = students.find((element) => element.id === id);
  const teacher = teachers.find((teacher) => teacher.subjects.includes(subj));
  if (teacher.capacityLeft > 3) {
    teacher.students.push(stuId.name);
    teacher.capacityLeft -= 1;
  } else {
    return "Sorry no available teachers left";
  }
};
// console.log(assignStudent(10, "chemistry"));
// console.log(school.teachers);

//3
const assignTeachersSubject = (id, subject) => {
  const teacher = school.findPerson("teachers", id);
  const subj = teacher.subjects;
  if (subj.includes(subject)) {
    return "subject already exists";
  } else {
    subj.push(subject);
  }
}
// console.log(assignTeachersSubject(1,'coocking'))
// console.log(school.teachers[0])


//4
// 4. Create a new method of anything you want.
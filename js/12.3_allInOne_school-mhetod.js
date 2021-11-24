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
      console.error("Type Not Found");
      return;
    }
    return this[type].find((element) => element.id === id);
  },
};

//1
// console.log(school.findPerson('studentssss',10))

//2
const assignStudent = (id, subj) => {
  const students = school.students;
  const teachers = school.teachers;
  const stuId = students.find((element) => element.id === id);
  const teacher = teachers.find((teacher) => teacher.subjects.includes(subj));
  if (teacher.capacityLeft > 0) {
    teacher.students.push(stuId.name);
    teacher.capacityLeft -= 1;
    console.log(
      `Congratulations, ${stuId.name} you are now in ${subj} class with Professor ${teacher.name}`
    );
  } else {
    console.log("Sorry no available teachers left");
  }
};
console.log("@===================@");
assignStudent(10, "history"); // teacher id 2 Jennifer
assignStudent(11, "biology"); // teacher id 1 Howard
// assignStudent(14, "biology"); // teacher id 1 Howard
console.log(school.teachers);

//3
// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, a new subject.
// Assign the new subject to that particular teacher if that
// subject doesn’t exist in their array of subjects

const assignTeachersSubject = (id, subject) => {
  const teacher = school.findPerson("teachers", id);
  if (teacher.subjects.includes(subject)) {
    return "subject already exists";
  } else {
    teacher.subjects.push(subject);
  }
// };
// console.log(assignTeachersSubject(1,'coocking'))
// console.log(assignTeachersSubject(1,'chemistry'))
// console.log(school.teachers[0])

//4
// 4. Create a new method of anything you want.
const addNewStudent = (id, name, age) => {
  const students = school.students;
  const newStudent = { id, name, age };

  const allTheId = students.find((element) => element.id >= id);
  if (allTheId) {
    console.log("Someting Went Wrong, Try another id");
  } else {
    students.push(newStudent);
    console.log(`Congratulations ${name}, Welcome to our school`);
  }
};
// console.log("@===================@");
// addNewStudent(14, "Ernest", 21);
// console.log(school.students)

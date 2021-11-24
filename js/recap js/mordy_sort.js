const arr = [
  { name: "Adam", attendance: true },
  { name: "Shani", attendance: false },
  { name: "Hila", attendance: true },
  { name: "Aviad", attendance: false },
  { name: "Harel", attendance: true },
];

const mySort = (a, b) => {
  if (a.attendance && !b.attendance) {
    return -1;
  } else if (a.attendance && b.attendance && a.name < b.name) {
    return -1;
  } else if (!a.attendance && !b.attendance && a.name < b.name) {
    return -1;
  }
};

// our goal is:
// sort arr by names but all truty first
/**
 * [
  { name: 'Adam', attendance: true },
  { name: 'Harel', attendance: true },
  { name: 'Hila', attendance: true },
  { name: 'Aviad', attendance: false },
  { name: 'Shani', attendance: false },
]
 */
arr.sort(mySort);
console.log(arr);

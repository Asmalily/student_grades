const fs = require('fs')
//total degree

const sumDegrees = (degrees) => {
  let sum = 0
  if (degrees.length) {
    degrees.forEach(degree => {
      sum += degree
    });
  }
  return sum
}


// loadsstudents definition /  total degree

const loadstudent = () => {
  try {
    const data = fs.readFileSync('./data.json').toString()
    let parsedStudents = JSON.parse(data)
     parsedStudents.forEach(student => {
      student.total = sumDegrees(student.degrees)
    })

    return parsedStudents
  } catch (error) { }
}

const saveStudents = (students) => {
  fs.writeFileSync('./data.json', JSON.stringify(students))
}

// add
const addstud = (id, name, degrees, comment) => {
  const students = loadstudent()
  //unique 
  const duplicateStudents = students.filter(student => student.id == id)

  if (duplicateStudents.length) {
    console.error('Error Duplicate ID:', id)
  } else {
    students.push(
      {
        id, name, degrees, comment
      }
    )
    saveStudents(students)
  }
}

//delete
const deleteStud = (id) => {
  const students = loadstudent()
  const filterStud = students.filter((stud) => stud.id != id)   //[1, 2]
  saveStudents(filterStud)
}

//list
const listStud = () => {
  const students = loadstudent()
  console.log(students)
}

//read
const readStud = (id) => {
  const students = loadstudent()
  let filterStud = students.filter(stud => stud.id == id)
  console.log(filterStud)
}



module.exports = {
  addstud,
  deleteStud,
  listStud,
  readStud
}
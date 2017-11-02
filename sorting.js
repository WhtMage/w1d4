var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

//Sort by Age
students.sort(function(a, b){
  return a.age - b.age;
});


//Sort by Name
students.sort(function(a, b){
  var nameA = a.name.toLowerCase();
  var nameB = b.name.toLowerCase();
  if (nameA < nameB){
    return -1;
  }
  if (nameA > nameB){
    return 1;
  }


  return 0;
});



console.log(students);
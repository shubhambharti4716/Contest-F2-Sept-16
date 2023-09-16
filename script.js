const data = [{
    name: "john",
    age: 24,
    profession: "developer"
},
{
    name: "jane",
    age: 27,
    profession: "admin"
},
];

// 1. Print Developers
// using function to print only developers
function printDeveloper() {
for (let worker of data) {
    // using === as it returns true only if operands are of same 
    if (worker.profession === 'developer') {
        console.log('Name: ' + worker.name + ', Age: ' + worker.age);
    }
}
}

// 2. Add Data
function addData() {
// creating an empty object newData to store worker data
let newData = {};
//prompt message asking the input name
newData.name = prompt("Enter name:");
//prompt message asking the input age
newData.age = parseInt(prompt("Enter age:"));
//prompt message asking the input profession
newData.profession = prompt("Enter profession:");
// adding data of new worker
data.push(newData);
// *printing added data
console.log(newData);
}

// 3. Remove Admins
function removeAdmin() {
// creating new empty array
let remAdmin = [];
let newData = [];

for (let worker of data) {
    // If it is an admin, add the worker to removedAdmins array
    if (worker.profession === 'admin') {
        remAdmin.push(worker);
    } else {
        newData.push(worker);
    }
}
// setting data array length to 0
data.length = 0;
data.push(...newData); // Add the filtered data back
// print removed admins
console.log('Removed Admins:', remAdmin);
}

// 4. Concatenate Array
function concatenateArray() {
// let arr = [];
// let arraySize = prompt("Enter Array size:");
// for (let i = 0; i < arraySize; i++) {
//     arr.push(prompt("Enter Array Element " + i));
// }
// let newArray = data.concat(arr);
// console.log(newArray);

let tempArray = [{
        name: 'Lakshman',
        age: 22,
        profession: 'developer'
    },
    {
        name: 'Ram',
        age: 24,
        profession: 'developer'
    }
];

const concatenatedData = [...data, ...tempArray];

console.log(concatenatedData);
}

// 5. Average Age
function averageAge() {
    // adding age of all worker
let totalAge = data.reduce((acc, worker) => acc + worker.age, 0);
//divide the age by number of workers
let average = totalAge / data.length;
//print average age
console.log(`Average Age: ${average}`);
}

// 6. Age Check
function checkAgeAbove25() {
    // using sum method to check if worker age is above 25
let isAbove25 = data.some((worker) => worker.age > 25);

if (isAbove25) {
    console.log('Person above age 25 found.');
} else {
    console.log('No one is above age 25.');
}
}

// 7. Unique Professions
function uniqueProfessions() {
    // creating a set to store unique profession
let professionsSet = new Set();
// adding profession to set
data.forEach((worker) => {
    professionsSet.add(worker.profession);
});
// converting set to array
let uniqueProfessions = [...professionsSet];
console.log('Unique Professions:', uniqueProfessions);
}

// 8. Sort by Age
function sortByAge() {
    // sorting array in ascending order
data.sort((a, b) => a.age - b.age);
console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
    // finding john to update
data.forEach((worker) => {
    if (worker.name === 'john') {
        //updated john's position
        console.log(`Updated ${worker.name}'s profession to 'Manager'`);
        worker.profession = 'manager';
    }
});
}

// 10. Profession Count
function getTotalProfessions() {
let professionCounts = {};
//counting number of worker in every profession
data.forEach((worker) => {
    if (professionCounts[worker.profession]) {
        // if profession existed add 1 into it
        professionCounts[worker.profession]++;
    } else {
        professionCounts[worker.profession] = 1; // if not found, initialize it with count of 1
    }
});
// printing profession count
console.log('Profession Counts:', professionCounts);
}
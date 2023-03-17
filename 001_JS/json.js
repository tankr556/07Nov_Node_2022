const emp = {
    name: "Rakesh",
    email: "Rakesh@gmail.com",
    phno: "9876543210"
}

const arr = ["java", "php", 10, 20.33]
console.log(emp);
console.log(arr);

const emp1 = JSON.stringify(emp)
const arr1 = JSON.stringify(arr)
console.log(emp1);
console.log(arr1);

const emp2 = JSON.parse(emp1)
console.log(emp2);

console.log(emp1.name);
console.log(emp.name);

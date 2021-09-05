//Play with JSON convertising JSON to Object
const jsonData = '{"name": "Angelina", "department": "Medical"}';

const obj = JSON.parse(jsonData);

console.log(obj.name);
console.log(obj.department);

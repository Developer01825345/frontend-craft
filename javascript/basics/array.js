const cities = ["Manchester", "Liverpool", "Liverpool"];
console.log(cities);
cities.push("city1"); // add new element to the end
console.log(cities);
cities.unshift("Edinburgh"); // add new element to the start
console.log(cities);
cities.pop(); // remove the last element
console.log(cities);
cities.shift(); // 
console.log(cities);
/** push and pop refer to the last element whereas unshift and shift refer to the first element of the array */

const index = cities.indexOf("Liverpool");

if (index != -1)
{
    cities.splice(index, 2);
}

console.log(cities);

/** Array using map */
const numbers = [2, 3, 4, 5]
const newNumbers = numbers.map(number => number*2);
console.log(newNumbers);

/** Array using filter */
const filterArray = ["Manchester", "Liverpool", "Live"];
const newFilterArray = filterArray.filter(a => a.length == 10);
console.log(newFilterArray);

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
console.log(dogNames.toString()); 
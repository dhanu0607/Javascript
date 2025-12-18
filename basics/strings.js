const name = "Dhanush";
const repoCount = "3";

//console.log(name + repoCount+"Value");
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const gameName = new String("dhanush-poojary");
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newSting = gameName.substring(0,4);
console.log(newSting);

const anotherString = gameName.slice(-10,1)
console.log(anotherString);


const newString2 = "    Dhanush    "
console.log(newString2);
console.log(newString2.trim());


const url = "https://dhanush.com/dhanush%20poojary"
console.log(url.replace('%20','-'));
console.log(url.includes('dhanush'));

console.log(gameName.split('-'));

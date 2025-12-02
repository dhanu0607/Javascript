const accountId = 2005
let accountEmail = "dhanushp630@gmail.com"
var accountPassword = "06070521"
accountCity = "Udupi"


let accountState;//its undefined

// accountId = 2  //its not allowed


accountEmail = "abc@gmail.com"
accountPassword = "0123"
accountCity = "Manipal"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

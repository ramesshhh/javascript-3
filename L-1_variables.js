const accountId = 1245;  // not able to change [to set constant]
let accountEmail = "ramesh@mail.com"; // [to set variable]
var accountPassword = "123456789";  // [to set variable]
accountCity = "Bokaro Steel City";
let accountState; // gives "undefined" because this is not defined

// accountId = 2 ;  // const not allow to change

/*
Prefer not to use "var"
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);


const accountId = 3546551;
let accountEmail = "sachin@gmail.com";
var accoutPassword = "654654";
accountCity = "Latur";
let accountState;

// accountId = 5;

accountEmail = "sunil@gmail.com";
accoutPassword = "1245";
accountCity = "pune";

/*
Note:-
  Prefer not to use var
  because of issue in block scope and functional scope
  If we declare a variable but not assign value to it
  then js considered that variable as undefined
*/

console.table([accountEmail, accoutPassword, accountCity, accountState]);

// let num = Math.floor(Math.random() * 10);
// let guess = + prompt('number');
//  if (num === guess) {
// console.log('you win')
//  } else  if ( num > guess){
//      console.log('number highter')
//  } else if (num < guess){
//      console.log('number lower')
//  } else {
//      console.log('try again')
//  }
//  console.log('game over');

let typeOfAction = prompt(' enter action type');
let CREATE_ACTION = 'update';
let READ_ACTION = 'read';
let UPADATE_ACTION = 'creat';
let DELETE_ACTION = 'delete';
switch (typeOfAction) {
   case CREATE_ACTION:
       console.log('CREAT')
       break;  
       case READ_ACTION:
           console.log('READ');
           break;
           default:
               console.log('Deafault behavior');
}


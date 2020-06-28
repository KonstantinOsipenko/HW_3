// exercise one
 let userAge = + prompt ('Enter your age');
   if (isNaN(NaN) === Number.isNaN(userAge)) {
      console.log('You enter string');
   } else if (userAge >= 18){
      console.log('Welcome to the jungle');
   } else if (userAge <= 12) {
      console.log('you are so young, go play on the yard');
   }

//  exercise two
 (isNaN(NaN) === Number.isNaN(userAge)) ? console.log('You enter string') :
 (userAge >= 18) ? console.log('you rock') :
 (userAge <=12) ? console.log('Ha-ha,go play...anywhere ')  : '' ;

let candidateAge = + prompt('Enter your Age');
let workExp = + prompt('Enter your work Exp');
let driveLicense = prompt('do you have driver license.Enter "yes" or "not"');
let pets = prompt('Do you have some pets.Enter "yes" or "not"');
let married = prompt('Do you married.Enter "yes" or "not"');
let gender = prompt('Indicate you gender');
let haveChild = prompt('Do you have a child.Enter "yes" or "not"');
 if (candidateAge >= 30 && workExp >= 3 && pets == 'yes' && driveLicense == 'yes' && gender =='male' && married =='yes' && haveChild == 'yes') {
   console.log('Exellent.You are accepted')
 } else {
   console.log('Sorry, you dont suit us')
 }
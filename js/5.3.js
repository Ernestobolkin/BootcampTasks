
// if else 

function isValidPassword(password){
  if(password.length>=7){
    return 'strong';
  }else{ 
    return 'weak'}
}

// ternary conditional

function isValidPassword(password){
  password.length>=7 ? console.log('strong') :console.log('weak');
}

// && logical operator

function isValidPassword (password){
  if (password.length !== 7 && !(password.length < 7)) {
    return 'strong';
  }
    return 'weak';
}







console.log(isValidPassword('abasasdc'))



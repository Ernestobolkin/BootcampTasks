if (keyGuess.charCodeAt() !== 32
&& keyGuess.charCodeAt() !== 69
&& keyGuess.charCodeAt() !== 66
&& keyGuess.charCodeAt() !== 83
&& keyGuess.charCodeAt() !== 84
&& keyGuess.charCodeAt() !== 67
&& keyGuess.charCodeAt() !== 65)

if(typeof keyGuess !== 'string'){
  wrongOrRight.innerText = "please enter a letter"
  }
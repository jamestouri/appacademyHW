
  window.setTimeout(function {
    alert("Hammer Time");
  }, 5000);


function hammerTime(time) {
  window.setTimeout(function {
    alert(`${time} is still Hammer Time`);
  });
}


const readline = require('readline')

const reader = readline.create({

  input: process.stdin,
  output: process.stdout
});

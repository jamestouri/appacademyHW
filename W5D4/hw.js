function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping1(); // in block, in block

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping2(); // in block, out of block

function mysteryScoping3() {
  const x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping3(); // SyntaxError

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}

mysteryScoping4(); // in block, out of block

function mysteryScoping5() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  let x = 'out of block again';
  console.log(x);
}


function madLib(verb, adjective, noun) {

  return`Do not ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

function fizzBuzz(n) {
  var res = []
  for (i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      res.push("fizzbuzz");
    }
    else if (i % 3 === 0 ) {
      res.push("fizz");
    }

    else if (i % 5 === 0) {
      res.push("buzz");
    }
    else {
      res.push(i);
    }
  }

  return res;
}


function isPrime(n) {
  var i = 2;
  while (i < n) {
    if (n % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}


function sumOfNPrimes(n) {
  var res = 0;
  var i = 2;
  while (n != 0) {
    if (isPrime(i)) {
      res += i
      n--;
    }
    i++;
  }
  return res;
}

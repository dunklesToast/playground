let reps = 0;

function count() {
  reps++;
}

let i = 4;

if (i % 2 === 0) {
  count();
  console.log(i + ' modulo 2 is 0');
  if (i % 0 === 0) {
    console.log(i + ' modulo 0 is 0')
    count();
    while (i < 23) {
      console.log('Entering while');
      count();
    }
  }
} else {
  console.log('else')
  count();
  count();
}

if (i != 7) {
  console.log('is not 7');
  count();
  while (i < 11) {
    console.log('Loops! ' + i);
    i = i + 3;
    console.log('is is ' + i)
    count();
    while (i < 25) {
      i = i + 4;
      count();
      console.log('Loops 2 ' + i);
    }
  }
} else {
  count();
  count();
}

console.log(reps);

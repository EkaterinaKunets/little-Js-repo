const sumTo = num => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  };
  return result;
};

const factorial = num => {
  if(num != 0 ) {
    return num * factorial(num - 1);
  };
   return 1;
};

const fibonacci = num => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
};

const isHappyTicket = number => {
  let a = 0;
  let b = 0;
  for (let i = 0; i < String(number).length/2; i++) {
    a += Number(String(number)[i]);
    console.log(a);
  }
  for (let i = String(number).length/2; i < String(number).length; i++) {
    b += Number(String(number)[i]);
  }
  return (a === b);
};

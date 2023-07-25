const q2 = (m, n) => {
  let a = 0;
  for (let i = m; i <= n; i++) {
    if (i % 2 !== 0) {
      a += i;
    }
  }
  return a;
};

//test cases
console.log(q2(1, 5));
console.log(q2(10, 20));

module.exports = q2;

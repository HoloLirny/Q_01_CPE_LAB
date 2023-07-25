const q3 = (runners) => {
  let a = 0;
  for (let i = 0; i < runners.length; i++) {
    a += runners[i].time;
  }
  a /= runners.length;

  return (b = runners.filter((x) => x.time <= a));
};

//test cases
const input1 = [
  { name: "Bobby", time: 45 },
  { name: "Robert", time: 55 },
  { name: "Wilson", time: 120 },
];

console.log(q3(input1));

module.exports = q3;

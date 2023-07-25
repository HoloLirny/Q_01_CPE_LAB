const q5 = (mafias, fights) => {
  for (let i = 0; i < fights.length; i++) {
    if (i % 2 === 0) {
      let a = fights[i] - 1,
        b = fights[i + 1] - 1;
      if (mafias[a].power > mafias[b].power) {
        mafias[a].power += mafias[b].power;
      } else if (mafias[a].power < mafias[b].power) {
        mafias[b].power += mafias[a].power;
      }
    }
  }
  let x = mafias[0].power;
  for (let i = 0; i < mafias.length; i++) {
    if (x < mafias[i].power) {
      x = mafias[i].power;
    }
  }
  for (let i = 0; i < mafias.length; i++) {
    if (x === mafias[i].power) {
      return mafias[i];
    }
  }
};

//Test case
const mafias = [
  { id: 1, power: 5 },
  { id: 2, power: 30 },
  { id: 3, power: 60 },
  { id: 4, power: 42 },
  { id: 5, power: 70 },
];
const fights = [5, 2, 4, 3, 1, 3];
console.log(q5(mafias, fights));

module.exports = q5;

const q1 = (hero) => {
  if (hero.hp + 10 >= 100) {
    hero.hp = 100;
  } else {
    hero.hp += 10;
  }

  if (hero.hp % 8 === 0) {
    hero.luckyHp = true;
  } else {
    hero.luckyHp = false;
  }
  return hero;
};

//test cases
const input1 = { name: "Batman", hp: 78 };
const input2 = { name: "Superman", hp: 95 };

console.log(q1(input1));
console.log(q1(input2));

module.exports = q1;

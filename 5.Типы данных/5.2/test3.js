// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// Потому что i никогда не станет равным 10.

let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) console.log( i );
}
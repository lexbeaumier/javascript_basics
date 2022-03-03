// 2.2.2 Pyramide de Mario

let etage = prompt ("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu")

let n = etage;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing #
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";
}
console.log(string);
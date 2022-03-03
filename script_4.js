const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Question 1
console.log('')
console.log('Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70');
const results = entrepreneurs.filter(function (e) {
  return e.year > 1970 && e.year < 1979;
});

console.log(results);

// OU 
/*
entrepreneurs.filter(function (e) {
  console.log(e.year > 1970 && e.year < 1979);

});

pas fini...  */


// Question 2 
console.log('')
console.log('Sors une array qui contient le prénom et le nom des entrepreneurs');
entrepreneurs.forEach((item) => {
  console.log(item.first, item.last)
});


// Question 3 
console.log('')
console.log('Quel âge aurait chaque inventeur aujourd\'hui ?');
{entrepreneurs.forEach(businessman => {
  age = ( 2022 - businessman.year)

  console.log(businessman.first + " " + businessman.last + " a " + age + " ans.")
  });
} 

// Question 4 
console.log('')
console.log('Trie les entrepreneurs par ordre alphabétique du nom de famille');
function SortArray(x, y){
  return x.last.localeCompare(y.last);
}
var s = entrepreneurs.sort(SortArray);
console.log(s);
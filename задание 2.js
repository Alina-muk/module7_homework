const object = {
  string:'abc',
  number1:10,
  number2:15,
}

function checkProperty(prop, object) {
  if (prop in object) return true
  else return false
}

console.log (checkProperty('string', object));
console.log (checkProperty('number', object));
console.log (checkProperty('number1', object));
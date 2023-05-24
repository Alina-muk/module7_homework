function createObject () {
    return Object.create(null);
  }
  
console.log(createObject());
console.log(Object.getPrototypeOf(createObject()));


// или если функцию записать в переменную

function createObject () {
  return Object.create(null);
}

const obj = createObject();
console.log(obj);
console.log(Object.getPrototypeOf(obj));
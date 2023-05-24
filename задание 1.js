 const object = {
  str2: "abc",
  num2: 2,
  num3: 5
};
 
function ownProperty (object) {
    for (let key in object){
      if (object.hasOwnProperty (key))
      console.log (key);
     }
}
  ownProperty(object);
  
//или с прототипом

const object1 = {
  str1: "qwe",
  num1: 1000
}
const object2 = Object.create(object1);
object2.str2= "abc";
object2.num2= 2;
 
function ownProperty (object2) {
    for (let key in object2){
      if (object2.hasOwnProperty (key))
      console.log (key);
     }
}
  
ownProperty(object2);

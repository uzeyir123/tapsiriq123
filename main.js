//1.tapsiriq
const hello = ["student","are","We"];
function reverseArray(arr){
    return arr.reverse()
}
console.log(reverseArray(hello))
//2.tapsiriq
const hello2 =['Blorgous','Glamyx','Wegord','SpaceKing'];
hello2.forEach((item)=>{
  console.log("Oh powerfull"+" "+item+" "+"we humans offer our unconditional surrender")
});
//3.tapsiriq
const hello3 = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
];
const hello4 = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room'
];
function hello5 (hello3,hello4){
    hello3.forEach((item)=>{
        hello4.forEach((element)=>{
            if(item==element){
                console.log(item)
            }
        })
    })
}
hello5(hello3,hello4)
//4.tapsiriq

const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant'},
    { name: 'bun', source: 'plant' }
  ];
  function  isTheDinnerVegan (arr){
    for (let i=0;i < arr.length;i++){
        if(arr[i].source !== 'meat'){
            return false
        }
        else {
            return true
        }
    }
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
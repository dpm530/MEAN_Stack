function magic_multiply(x, y){
   if (x==0 && y==0){
      return "All inputs 0"
   }
   else if(Array.isArray(x)){
      for(var i=0;i<x.length;i++){
         x[i]=x[i]*y
      }
      return x
   };

   if((typeof x === 'number') && (typeof y === 'string')){
      return "Error: Can not multiply by string"
   }
   else if((typeof x === 'number') && (typeof y === 'number')){
      return x*y
   }
   else if(typeof x === 'string'){
      let answer="";
      for(let i=0;i<y;i++){
         answer+=x;
      }
      return answer;
   }



}
// Test 1
let test1 = magic_multiply(5, 2);
console.log(test1);

// Test2
let test2 = magic_multiply(0, 0);
console.log(test2);

// Test3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

// Test4
let test4 = magic_multiply(7, "three");
console.log(test4);

// // Test5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);

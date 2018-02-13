// Math 1
function zero_negativity(array){
   var i=0
   while(i<array.length){
      if(array[i]%2!=0){
         return false
      }
      i+=1
   }
   return true
}
console.log(zero_negativity([2,4,6]))
console.log(zero_negativity([1,3,5]))

// Math 2
function is_even(number){
   if(number%2==0){
      return true
   } else{
      return false
   }
}
console.log(is_even(5))
console.log(is_even(4))

// Math 3
function how_many_even(array){
   var counter=0
   for(var i=0;i<array.length;i++){
      if (is_even(array[i])){
         counter+=1
      }
   }
   return counter
}
console.log(how_many_even([1,3,5]))
console.log(how_many_even([2,4,6]))

// Math 4
function create_dummy_array(n){
   var answer=[]
   for(var i=0;i<=n;i++){
      answer.push(Math.floor(Math.random() * 10));
   }
   return answer
}
console.log(create_dummy_array(20))
console.log(create_dummy_array(10))
console.log(create_dummy_array(5))

// Math 4
function random_choice(array){
   return array[Math.floor(Math.random() * (array.length))]
}
console.log(random_choice([1,2,3,4,5]))
console.log(random_choice(["hello","world"]))
console.log(random_choice([1,2,3,"hello",4, 5, 6,"world"]))

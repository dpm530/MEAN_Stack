// Part 1
function starString(number){
   var answer="";
   for(var i=1;i<=number;i++){
      answer+="*"
   }
   return answer
}
console.log(starString(8))

// Part 2
function drawStars(array){
   for(var i=0;i<array.length;i++){
      console.log(starString(array[i]))
   }
}
console.log(drawStars([4, 6, 1, 3, 5, 7, 25]))

// Part 3
function starString2(word){
   word=word.toLowerCase()
   var answer="";
   for(var i=0;i<word.length;i++){
      answer+=word[0]
   }
   return answer
}

function drawStars2(array){

   for(var i=0;i<array.length;i++){

      if(typeof array[i] === 'number'){
         console.log(starString(array[i]))
      }
      else{
         console.log(starString2(array[i]))

      }
   }

}
console.log(drawStars2([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]))

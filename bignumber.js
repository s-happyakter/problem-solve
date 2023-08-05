function findLarest(number){
let largest = number[0];
for(let i=0;i<number.length;i++){
   const currentItem = number[i];
   if(currentItem > largest){
     largest = currentItem;
    
   }
   console.log(largest);
}
return largest
}


const arry=[ 22,23,24,25,26];
console.log(findLarest(arry));


// arry index,element.sum

function sumofArry(arry){

let sum=0;
for(i=0;i<number.length;i++){
    const index = arry[i];
    const element = index;
    sum = sum + arry[i];
    console.log(index,element,sum);
}

return sum;

}
const number=[1,2,3,4,5,6]
sumofArry(number);
// console.log(sumofArry(number));



function isleapYear(year){
const remainder= year % 4

if(remainder===0){
    console.log("this year is leap year");
}   
    
else{
    console.log("this year is not leap year")
}

}
const myYearis = isleapYear(2007);
console.log(myYearis );
const herYearis = isleapYear(2009);
console.log(herYearis );

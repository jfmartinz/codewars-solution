// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let sum = 0;
    
    
  for(let i= 0; i< x.length; i++){
    let elements = x[i]; 
    if(typeof elements === 'string'){
      sum+= parseInt(elements);
    }else{
      sum+=elements;
    }
  }
    return sum;
    }
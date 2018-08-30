function trialDivision (num){
    //checks if the number is an integer
    if (num % 1 !==0){
        return false;
    }
    
    //if the number is one or less than one, it's not a prime number
    if (num <= 1){
        return false;
    }

    //both 2 and 3 are prime numbers
    if (num === 2 || 3){
        return true;
    }

   // If the number is not divided by 2 then we may eliminate all further even dividers.
    if (num % 2 === 0){
        return false;
    }
  
  // If there is no dividers up to square root of n then there is no higher dividers as well.

    const dividerLimit = Math.sqrt(num)
    for ( let divider = 3; divider <= dividerLimit; divider +=2){
        if(num % divider === 0 ){
            return false;
        }
    }
    return true;
}

trialDivision(1);

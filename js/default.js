'use strict';

let nums = [2, 7, 11, 15];

let target = 9;


function targetOperandsArray( numArray = [] ) {
    
    //checks if numArray is an array
    if( Array.isArray(numArray) ) {

        //checks if the length of numArray is less than 2
        if( numArray.length >= 2 ) {
            
            //loops through the numArray
            outterloop: for(let i = 0; i < numArray.length; i++) {

                for(let j = 0; j < numArray.length; j++) {

                    //check if sum of any two elements of the numArray == target
                    if( numArray[i] + numArray[j] == target ) {

                        let output = [];
                        output.push(numArray[i]);
                        output.push(numArray[j]);
                        
                        return output;
                    }

                }

            }

            //no two elements sum up to target, display error message
            return `Sorry, no two elements sum up to ${target}, try a different array`;
            
        }else {
            //display error message
            return 'your array should have at least 2 elements';
        }

    }else {
        //display error message
        return 'Invalid argument type, please parse an array as the perimeter';
    }
}

console.log( targetOperandsArray( nums )  )

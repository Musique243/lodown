'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/*
* identity: designed to take in a value and return that value unchanged.
*
* @param {value}: any value.
* @param {function} value: the function to be applied to any value.
*/
_.identity = function (value) {
    return value;
}


/*
* typeOf: designed to take in a value and return that value's type.
*
* @param {value}: any value.
*
* @return {string}: returns the datatype of the input value as a string.
*/
_.typeOf = function (value) {
    if (typeof value === "string") {
        return "string";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "undefined") {
        return "undefined";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (typeof value === "object" && value === null) {
        return "null";
    } else if (typeof value === "function") {
        return "function";
    } else {
        return "object";
    }

}


/*
* first: designed to return the first x number of elements in the array as determined by the input number.
*
* @param {array}: an array to use the function on.
* @param {function} number: the number that determines how many of the first elements of the array to return.
*
* @return {array}: returns the first elements in the array according to the input number. If no number entered,
* returns the first element, otherwise if not an array, returns an empty array.
*/
_.first = function (array, number) {
    if (number === null || typeof number !== "number") {
        return array[0];
    } else if (Array.isArray(array) === false || number <= 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else {
        return array.slice(0, number);
    }


}


/*
* last: designed to return the last x number of elements in the array, determined by the input number.
*
* @param {array}: an array to use the function on.
* @param {function} number: the function that determines how many of the last elements of the array to return.
*
* @return {array}: returns the last elements in the array according to the input number. If no number entered,
* returns the last element, otherwise if not an array, returns an empty array.
*/
_.last = function (array, number) {
    if (number === null || typeof number !== "number") {
        return array[array.length - 1];
    } else if (typeof number === "number" && number >= 0 && number < array.length) {
        return array.splice(number - 1, array.length);
    } else if (number < 0) {
        return [];
    } else if (number > array.length) {
        return array;
    } else if (Array.isArray(array) !== true) {
        return [];
    }
}


/*
* indexOf: designed to loop through an array and return the index of a specific value.
* 
* @param {array}: the array to loop through.
* @param {function} value: the function value to look for in the array.
*/
_.indexOf = function (array, value) {
    for (var i = 0; i < array.length; i++) {
        if ((array[i]) === value) {
            return i;
        }
    }
    return -1;
}


/*
* contains: designed to loop through an array and return whether the value is in the array.
*
* @param {array}: the array to loop through.
* @param {funtion} value: the function to be applied to the specific value.
*/
_.contains = function (array, value) {
    var containsVal = false;
    for (var i = 0; i < array.length; i++) {
        ((array[i]) === value) ? containsVal = true : containsVal;
    }
    return containsVal;

}


/*
* unique: designed to loop through an array and return a new array with duplicate values removed.
*
* @param {array}: the array to loop through.
* 
*/
_.unique = function (array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (_.indexOf(newArr, array[i]) === -1) {
            newArr.push(array[i])
        }
    }
    return newArr;
}


/*
* filter: designed to loop through an array and return an array with elements that passed the arguments.
*
* @param {array}: an array to iterate through.
* @param {function} func: the function to be applied to each element in the array.
*/
_.filter = function (array, func) {
    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}


/*
* reject: designed to loop through an array and return an array with elements that don't pass the arguments.
*
* @param {array}: array to loop through.
* @param {function} func: the function to be applied to each element in the array.
*/
_.reject = function (array, func) {
    var rejected = [];
    for (var i = 0; i < array.length; i++) {
        if (!func(array[i], i, array)) {
            rejected.push(array[i]);
        }
    }
    return rejected;
}


/*
* partition: designed to loop through an array and return 2 arrays with truthy and falsy values separated.
*
* @param {array}: the array to iterate through.
* @param {function} func: function to pass the values through to determing truthy or falsy values.
*/
_.partition = function (array, func) {
    var arr1 = [];
    var arr2 = [];
    var output = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            arr1.push(array[i]);
        } else if (!func(array[i], i, array)) {
            arr2.push(array[i]);
        }

    }
    output.push(arr1, arr2);
    return output;
}


/*
* map: designed to loop through an array and return a new array with the values passed through the function.
*
* @param {array}: an array to loop through.
* @param {function} func: the function to pass the values in.
*/
_.map = function(collection, func) {
    var newArr = [];
    if (typeof collection === "object" && Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
         newArr.push(func(collection[i], i, collection));           
        }
    } else {
        for (var key in collection) {
            newArr.push(func(collection[key], key, collection));                    
        }     
    }
return newArr;
}


/*
* pluck: designed to loop through an array of objects and return the values from the specified property.
*
* @param {array}: an array of objects to loop through.
* @param {function} property: the function to pass the property through.
*/
_.pluck = function(array, property) {
    var result = _.map(array, function(element) {
        return element[property];
    });
    return result;
}


/*
* every: designed to loop through array or object and test if all elements pass the function.
*
* @param {collection}: an array or object to iterate through.
* @param {function} func: function that is testing the elements of array or object.
*/
_.every = function (collection, func) {
    var isFalse = 0;
    if(func === undefined) {
        if(Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if(!collection[i]) {
                    return false;
                }
            }
            return true;
        }else{
            for (var key in collection) {
                if(!collection[key]) {
                    return false;
                }
            }
            return true;
        }
    }else{
        if(Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if(!func(collection[i])) {
                return false;
            }
        }
        return true;
        }else{
            for (var key in collection) {
                if(!collection[key]) {
                    return false;
                }
            }
            return true;
        }
     
    }
}


/*
* some: designed to loop through an array or object and test if at least one element passes the test.
*
* @param {collection}: an array or object.
* @param {function}func: function designed to test if value passes the test.
*/
_.some = function(collection, func) {
    //if function if undefined
    if(func === undefined) {
        //determine if array
        if(Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                //if current value is truthy
                if(collection[i]) {
                    return true;    
                }   
            }
                return false;
        }else{
            //else its an object
            for (var key in collection) {
                //if current value is truthy
                if(collection[key]) {
                    return true;
                }
            }
            return false;
        }    
    }else{
        //else function is defined
        if(Array.isArray(collection)) {
            //determine if array
            for (var i = 0; i < collection.length; i++) {
                //determine current value true if passed to function
                if(func(collection[i], key, collection)) {
                    return true;
                }
            }
            return false;
        }else{
            //else its an object
            for (var key in collection) {
                //determine if current value is true if passed to function
                if(func(collection[key], key, collection)) {
                    return true;
                }
            }
            return false;
        }            
    }
}


/*
* reduce: designed to loop through an array and return a single value.
*
* @param {array}: the array to loop through.
* @param {function}func: function to test the elements with.
* @param {seed}: accumulates the value of each iteration.
*/
_.reduce = function (array, func, seed) {
    if (seed === undefined) {
        var output = array[0];
        for (var i = 1; i < array.length; i++) {
            output = func(output, array[i], i, array);
        }
    } else {
        output = seed;
        for (var i = 0; i < array.length; i++) {
            output = func(output, array[i], i, array);
        }
    }
    return output;
}


/*
* extend: designed to loop through an object and put that data into another object.
*
* @param {object}: object to loop through.
* @param {objects}: the objects to get the values from.
*/
_.extend = function(obj1, ...objects) {
    for (var i = 0; i < objects.length; i++) {
         Object.assign(obj1, objects[i]);
    }
    return obj1;
}
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
* identity: function takes in any value and returns that value unchanged.
*
* @param {any value} value: function takes in any value.
* @returns {any value} value: the function returns input value unchanged.
*/
_.identity = function (value) {
    return value;
}
module.exports.identity = identity;

/*
* typeOf: designed to take in any value and return that value's type.
*
* @param {any value} value: function takes in any value.
*
* @return {string}: function returns the datatype of the input value as a string.
*/
_.typeOf = function (value) {
    if (typeof value === "object" && value === null) {
        return "null";
    }else if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        return "object";
    }else if (Array.isArray(value)) {
        return "array";
    }else{
        return typeof value;
    }
}


/*
* first: designed to return the first x number of elements in the array as determined by the input number.
*
* @param {array} array: the input array to use the function on.
* @param {number} number: the number that determines how many of the first elements of the array to return.
*
* @return {array}: function returns the first elements in the array according to the input number. If no number entered,
* function returns the first element, otherwise if not an array, returns an empty array.
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
* last: function returns the last x number of elements in the array, determined by the input number.
*
* @param {array} array: the input array to use the function on.
* @param {number}: the function that determines how many of the last elements of the array to return.
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
* indexOf: function is designed to loop through an array and return the index of a specific value.
* 
* @param {array} array: the input array to iterate through.
* @param {value} value: the function takes in a target value to search for in the input array.
*
* @return: if target value is found in array, function will return the index number of the value,
* if input value is not found, function returns -1.
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
* contains: function loops through an array and returns whether the target value exists in the array.
*
* @param {array} array: the input array to iterate through.
* @param {value} value: the function takes in a target value to search for in the array.
*
* @return: if the target value exists in the array, function returns true,
* if target value is not in the array, function returns false.
*/
_.contains = function (array, value) {
    var containsVal = false;
    for (var i = 0; i < array.length; i++) {
        ((array[i]) === value) ? containsVal = true : containsVal;
    }
    return containsVal;

}


/*
* unique: the function loops through an array and returns a new array with duplicate values removed.
*
* @param {array} array: the array to loop through.
* 
* @return {array}: function returns a new array of elements in the input array with duplicate elements removed.
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
* filter: function loops through an array and passes each value into a callback function. If the result of passing the
* callback function to the value is true, the value is pushed to an output array.
*
* @param {array} array: an input array to iterate through.
* @param {function} func: the function to be applied to each element in the array.
*
* @return {array}: function returns a new array of elements that passed the callback function which resulted in true.
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
* reject: function loops through an input array and passes each value into a callback function. If the result of the callback
* function is false, the array value is pushed to an output array that the reject function returns.
*
* @param {array} array: the input array to loop through.
* @param {function} func: the function to be applied to each element in the array.
*
* @return {array}: returns a new array of elements that passed the callback function and resulted in false.
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
* partition: function loops through an input array and returns 2 arrays with truthy and falsy values separated.
*
* @param {array} array: the input array to iterate through.
* @param {function} func: function to pass the values through to determine truthy or falsy values.
*
* @return {array}: returns an array of two arrays separated by the elements that resulted in truthy and falsy 
* when passed into the function. 
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
* map: function loops through an array and passes each value to a callback function. The return
* value of the callback function is pushed into an output array that the map function returns.
*
* @param {array} collection: an input array to loop through.
* @param {function} func: the function to pass the values through.
*
* @return {array}: returns a new array of the values after being passed through the callback function.
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
* @param {array} array: an array of objects to loop through.
* @param {string} property: a string reperesenting the property to take the values from
*/
_.pluck = function(array, property) {
    var result = _.map(array, function(element) {
        return element[property];
    });
    return result;
}


/*
* every: function loops through the input array or object and tests if all elements/values pass the function.
*
* @param {array/object} collection: an array or object to iterate through.
* @param {function} func: function that is passed through the elements/values of array or object.
*
* @return: returns true if every element passed through the function resulted in true. If
* even one value results in false, function returns false.
*/
_.every = function (collection, func) {
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
* some: function loops through an input array or object and tests if at least one element passes the test when passed through the function.
*
* @param {array/object} collection: an input array or object.
* @param {function}func: function designed to test if element/value passes the test.
*
* @return: returns true if the result of the returned value of the functon is true for at least one value.
* If the all returned values are false, the function returns false.
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
* reduce: function loops through an input array and returns a single value.
*
* @param {array} array: the input array to loop through.
* @param {function}: function that will accumulate the single return value that reduce returns.
* @param {seed}: initializes the accumulator value in the callback function.
* @return: returns the output value that is returned from the callback function on the final iteration of the array.
*
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
* @param {object}: the input object to loop through.
* @param {objects}: the objects to get the values from.
*
* @return: returns the updated object with the copied values
*/
_.extend = function(obj1, ...objects) {
    for (var i = 0; i < objects.length; i++) {
         Object.assign(obj1, objects[i]);
    }
    return obj1;
}
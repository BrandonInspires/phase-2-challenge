// snippet test
    console.assert(snippet("Hello World!", 7) === "Hello W")
    console.assert(snippet("Hello World!", 20) === "Hello World!")

// numProps test
    var thisObject = {"key": "value", "anotherKey":"value"}
    var anotherObject = {"key": "value", "anotherKey":"value", "thirdKey":"value", "fourthKey":"value", "fifthKey":"value"}
    var lastObject = {"key": "value", "anotherKey":"value", "thirdKey":"value"}
    console.assert(numProps(thisObject) == 2, 'thisObject has 2 properties')
    console.assert(numProps(anotherObject) == 5, 'anotherObject has 5 properties')
    console.assert(numProps(lastObject) == 3, 'lastObject has 3 properites ')

// filterBetween test
let arr1 = [1, 2, 3, 4, 5, 6, 7]
    console.assert(filterBetween(arr1, 3, 6) === [3, 4, 5, 6], 'arr1 should return [ 3, 4, 5, 6 ]')


// weekday test

// console.assert(weekday(new Date())) // Start of new date test
// snippet test
console.assert(snippet("Hello World!", 7) === "Hello W...", 'This test didnt pass')
console.assert(snippet("Hello World!", 20) === "Hello World!", 'This Test did not pass')
console.assert(snippet(56, 20) === "Please enter a string as the first argument")

// numProps test
var thisObject = {
    "key": "value",
    "anotherKey": "value"
}
var anotherObject = {
    "key": "value",
    "anotherKey": "value",
    "thirdKey": "value",
    "fourthKey": "value",
    "fifthKey": "value"
}
var lastObject = {
    "key": "value",
    "anotherKey": "value",
    "thirdKey": "value"
}
console.assert(numProps(thisObject) == 2, 'thisObject has 2 properties')
console.assert(numProps(anotherObject) == 5, 'anotherObject has 5 properties')
console.assert(numProps(lastObject) == 3, 'lastObject has 3 properites ')
console.assert(numProps(67) == "Please enter an object as the argument", "Function should only take an object as the argument")

/**
 * JSON stringify method to compare arrays without having to import Underscore/LoDash etc
 */
// filterBetween test
let arr1 = [1, 2, 3, 4, 5, 6, 7]
console.assert(JSON.stringify(console.log(filterBetween(arr1, 3, 6)) == [3, 4, 5, 6]), 'arr1 should return [ 3, 4, 5, 6 ]')
console.assert(JSON.stringify(console.log(filterBetween(arr1, 1, 4)) == [1, 2, 3, 4]), 'arr1 should return [1, 2, 3, 4]')
console.assert(filterBetween(78, 1, 4) == "Please enter an array as the first argument", 'the first argument should only take an array')


// weekday test
var date1 = "Mon Jun 19 2017 21:29:01 GMT-0700 (PDT)"
console.assert(weekday(date1) == "Monday", "Mon Jun 19 2017 21:29:01 GMT-0700 (PDT) is a Monday")
// console.assert(weekday(new Date())) // Start of new date test

console.assert(weekday(new Date() ) == "Wednesday", "This test did not pass" )
// Consider using the module pattern or interface pattern that Punit showed
// to allow easier testing of two or more implementations of the same function

function weekday(date) {
    switch (true) {
        case date.getDay() == 0:
        return "Sunday";
        break;
        case date.getDay() == 1:
        return "Monday";
        break;
        case date.getDay() == 2:
        return "Tuesday";
        break;
        case date.getDay() == 3:
        return "Wednesday";
        break;
        case date.getDay() == 4:
        return "Thursday";
        break;
        case date.getDay() == 5:
        return "Friday";
        break;
        case date.getDay() == 6:
        return "Saturday";
        break;
        default:
        return false;
        break;
    }
}
// function weekday2(date)
// var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(days[date.getDay()]);
// }

function snippet(string, maxlength) {
    if (typeof(string) != "string") {
        return "Please enter a string as the first argument"
    } else {
return string.slice(0, maxlength)
}}

function numProps(obj) {
            if (typeof(arr) != "object") {
        return "Please enter an object as the argument"
    } else {
return Object.values(obj).length
}}

function filterBetween(arr, min, max) {
        if (typeof(arr) != "array") {
        return "Please enter an array as the first argument"
    } else {
return arr.filter(function(item){ return item >= min && item <= max})
}}

const thisObject = {"key": "value", "anotherKey":"value"}
let arr = [1, 2, 3, 4, 5, 6, 7]
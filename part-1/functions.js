// Consider using the module pattern or interface pattern that Punit showed
// to allow easier testing of two or more implementations of the same function

function weekday(date) {
    switch (true) {
        case date.getDay() == 0:
            return "Sun";
            break;
        case date.getDay() == 1:
            return "Mon";
            break;
        case date.getDay() == 2:
            return "Tue";
            break;
        case date.getDay() == 3:
            return "Wed";
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
<<<<<<< HEAD
    if (typeof (string) != "string") {
        return "Please enter a string as the first argument"
    } else if (maxlength > string.length) {
        return string.slice(0, maxlength)
    } else
        return console.log(string.slice(0, maxlength) + "...")
}
=======
    if (typeof(string) != "string") {
        return "Please enter a string as the first argument"
    } else {
return string.slice(0, maxlength)
}}
>>>>>>> 11253725e5309264d893375eb848214ad56b2ad8


function numProps(obj) {
<<<<<<< HEAD
    if (typeof (arr) != "object") {
        return "Please enter an object as the argument"
    } else {
        return Object.values(obj).length
    }
}

function filterBetween(arr, min, max) {
    if (typeof (arr) != "array") {
        return "Please enter an array as the first argument"
    } else {
        return arr.filter(function (item) {
            return item >= min && item <= max
        })
    }
}
=======
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
>>>>>>> 11253725e5309264d893375eb848214ad56b2ad8

const thisObject = {
    "key": "value",
    "anotherKey": "value"
}
let arr = [1, 2, 3, 4, 5, 6, 7]
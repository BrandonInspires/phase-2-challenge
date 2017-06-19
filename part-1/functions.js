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

function snippet(string, maxlength) {
return string.slice(0, maxlength)
}

function numProps(obj) {
return Object.getOwnPropertyNames.length
}

function filterBetween(arr, min, max) {
return arr.filter(function(item){ return item >= min && item <= max})
}

const thisObject = {"key": "value", "anotherKey":"value"}
let arr = [1, 2, 3, 4, 5, 6, 7]
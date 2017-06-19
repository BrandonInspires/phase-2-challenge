function weekday(date) {

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
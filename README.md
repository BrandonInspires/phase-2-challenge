# phase-2-challenge
Phase 2 Interview Challenge (40 points)
- [x] 10: Solution is in a public GitHub repository called phase-2-challenge.
- [x] 10: Solution repository has 4 folders: part-1, part-2, and part-3, and part-4.
- [x] 20: Git history shows frequent commits.

# Part 1 
## Show a weekday (60 points)
``` 

Write a function weekday(date) to find the weekday for a given Date object, returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.

``` 
Requirements

 - [ ] 10: A test using expected/valid inputs for the weekday() function is written in tests.js.
 - [ ] 10: A test using unexpected/invalid inputs for the weekday() function is written in tests.js.
 - [ ] 30: Correct implementation of the weekday() is defined in functions.js.
 - [ ] 10: Tests for weekday() are passing.
 
 ## Get a snippet from text (60 points)

 ``` 

Write a function snippet(string, maxlength) that shortens the string given to the maxlength and adds the ellipsis character ("…") to the end of string, and then returns the shortened string. If the string is shorter than the maxlength, just return the string unmodified.

```
Requirements

 - [ ] 10: A test using expected/valid inputs for the snippet() function is written in tests.js.
 - [ ] 10: A test using unexpected/invalid inputs for the snippet() function is written in tests.js.
 - [ ] 30: Correct implementation of the snippet() is defined in functions.js.
 - [ ] 10: Tests for snippet() are passing.
 
## Number of properties (60 points)

```

Write a function numProps(obj) that returns the number of properties an object has. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.
```
Requirements

 - [ ] 10: A test using expected/valid inputs for the numProps() function is written in tests.js.
 - [ ] 10: A test using unexpected/invalid inputs for the numProps() function is written in tests.js.
 - [ ] 30: Correct implementation of the numProps() is defined in functions.js.
 - [ ] 10: Tests for numProps() are passing.

##  Filter between (60 points)
```
Write a function filterBetween(array, min, max) that takes an array of numbers, a min value, and a max value. It returns a new array containing only the elements that are greater than or equal to min and less than or equal to max.

Example:

let arr = [1, 2, 3, 4, 5, 6, 7]

filterBetween(arr, 3, 6) // => [3, 4, 5, 6]
filterBetween(arr, 5, 10) // => [5, 6, 7]
```
Requirements

 - [ ] 10: A test using expected/valid inputs for the filterBetween() function is written in tests.js.
 - [ ] 10: A test using unexpected/invalid inputs for the filterBetween() function is written in tests.js.
 - [ ] 30: Correct implementation of the filterBetween() is defined in functions.js.
 - [ ] 10: Tests for filterBetween() are passing.

# Part 2: Extract data from JSON file (80 points)
Write a Node.js script to search for data from a JSON file.

 - [ ] 40: searchByName.js script prints the client id and rep_name for all clients whose rep_name starts with the provided name argument.
 - [ ] 40: searchByState.js script prints the client id, rep_name, company, city, and state that for all clients whose state matches the provided state argument.

 # Part 3: HTML layout for grocery store (170 points)
 Requirements

 - [x] 10: All files are stored under the part-3/ folder
 - [x] 20: No third party CSS libraries are used (all code must be written from scratch)
 - [x] 10: HTML and CSS are separated into their own files.
 - [x] 20: Page has a full-width header with the site title "Grocer" and a button "Cart"
 - [x] 10: Site title "Grocer" is aligned to the left
 - [x] 10: "Cart" button is aligned to the right
 - [x] 20: Page has a "Sections" sidebar with all sections for grocery items
 - [x] 10: Page has a main content area showing each of the grocery items
 - [x] 20: Main content lists all grocery items' name, price, and an "Add to cart" button
 - [x] 20: Clicking on a section in the "Sections" sidebar will jump to that section
 - [x] 10: Main content organizes all grocery items by section

 # Part 4 Quiz (50 points)
 Copy the questions below into a file part-4/quiz.md. Then, write your answer to each question directly below it.

The quiz is worth 50 points in total.

570 points = 456 is passing.
// Given an array of objects, sort the objects by population size. Return the entire object.

// To sort an array of objects by a certain property, we have to use the compare function as a parameter in the built-in sort method in JavaScript.

// The compare function takes in two parameters: here they are named a and b. They represent two objects next to each other in our array. If a and b are both objects, we can use dot notation to access the property population.

// If we want to be sure that the array has objects sorted by population in increasing order, we evaluate a.population - b.population. If it’s -1, it will put the list in decreasing order by population. The opposite would put it in increasing order. If the expression happens to evaluate to 0, it means that the two patterns are equal to the other.

const sortObjects = (arr) => {
    return arr.sort((a, b) => (a.population > b.population) ? 1 : -1);
}
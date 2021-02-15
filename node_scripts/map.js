const myMap = function(array, func) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(func(array[i]))
    }
    return output
}

const exampleList = [1, 2, 3, 4, 5]
const addOneToEach = myMap(exampleList, (i) => i + 1)
console.log('Added one to each!', addOneToEach)
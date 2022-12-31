// 2. Countdown Sequence
// Stack :  javascript

// A countdown sequence is a descending sequence of k integers from k down to 1 (e.g. 5, 4, 3, 2, 1). Write a function that returns an array of the form[x, y] where x is the number of countdown sequences in the given array and y is the array of those sequences in the order in which they appear in the array.


function finalCountdown (array) {
    if(!array.length) return [0,array]
    
    var length = array.length
    let temp = 0
    let tempArray = []
    let totalCountdown = 0
    let finalArray = []
    for(let i = length; i >= 0; i--){
        if(array[i]===1) {
            tempArray = []
            temp = array[i]
            tempArray.push(array[i])
            finalArray.push(tempArray)
            totalCountdown++
            // console.log(finalArray)
        } else if (array[i]===temp+1) {
            temp = array[i]
            tempArray.push(array[i])
            // console.log(finalArray)
        } else {
            temp = 0
        }
    }
    return [totalCountdown,finalArray]

}

console.log(finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]))

// Example inputs and outputs:

// finalCountdown([4, 8, 3, 2, 1, 2]) ➞ [1, [[3, 2, 1]]]
// // 1 countdown sequence: 3, 2, 1

// finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]) ➞ [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
// // 2 countdown sequences:
// // 5, 4, 3, 2, 1 and 3, 2, 1

// finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]) ➞ [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
// // 3 countdown sequences:
// // 4, 3, 2, 1 ; 3, 2, 1 and 1

// finalCountdown([1, 1, 2, 1]) ➞ [3, [[1], [1], [2, 1]]]

// finalCountdown([]) ➞  [0, []]

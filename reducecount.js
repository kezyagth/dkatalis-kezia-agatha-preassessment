//Problem statement
//Given an Array of strings, use Array#reduce to create an object 
//that contains the number of times each string occured in the array.

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

function countWords(arr) {
  return arr.reduce(function(countMap, word) {
    // your implementation here
    var hitungApple = 0
    var hitungBanana = 0
    var hitungDurian = 0
    var hitungOther = 0
    var object = {}
    for(var i = 0; i < arr.length; i++){
            if(arr[i] === "Apple") {
                hitungApple += 1
            } else if (arr[i] === "Banana"){
                hitungBanana += 1
            } else if (arr[i] === "Durian") {
                hitungDurian += 1
            } else {
                hitungOther += 1
            }
    }
    object.Apple = hitungApple
    object.Banana = hitungBanana
    object.Durian = hitungDurian
    countMap = object
    return countMap
  }, {}) // second argument to reduce initialises countMap to {}
}
console.log(countWords(inputWords))

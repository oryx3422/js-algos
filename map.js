function myMap(arr, callback) {
  const result = []
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) result.push(callback(arr[i]))
  }
  return result
}

console.log(myMap([1, 2, 3, 4, 5], n => n ** 2))
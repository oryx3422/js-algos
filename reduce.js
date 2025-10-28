function myReduce(arr, callback, initValue) {
  let accum = initValue
  let startIndex = 0

  if(accum === undefined) {
    accum = arr[0]
    startIndex = 1
  }

  for(let i = 0; i < arr.length; i++) {
    accum = callback(accum, arr[i], i, arr)
  }
  return accum
}

console.log(myReduce([1, 2, 3, 4, 5],(acc, num) => acc + num, 0))
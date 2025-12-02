//  arr.filter((_, i) => i % 2 === 0)
//  arr.filter((_, i) => i !== removeIndex)

//  js

function myFilter(arr, callback) {
  const result = []
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) result.push(arr[i])
  }
  return result
}


console.log(myFilter([1, 2, 3, 4, 5], n => n % 2 === 0))

//  ts

function filter<T>(
  numbers: Array<T>, 
  callback: (item: T) => boolean) {
  const res: Array<T> = []
  numbers.forEach((n) => {
    if(callback(n)) res.push(n)
  })
  return res
}

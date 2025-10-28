function binarySearch(arr, target) {
  let l = 0
  let r = arr.length - 1
  while(l <= r) {
    const mid = Math.floor((l+r) / 2)
    if (arr[mid] === target) return mid
    else if (target > arr[mid]) l = mid + 1
    else r = mid - 1
  } 
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)) // -1
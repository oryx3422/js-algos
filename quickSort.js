function quickSort(arr) {
  if (arr.length <= 1) return arr
  let pivot = arr[0]
  let l = []
  let r = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      l.push(arr[i])
    } else {
      r.push(arr[i])
    }
  }
  return [...quickSort(l), pivot, ...quickSort(r)]
}

console.log(quickSort([3, 2, 4, 5, 2, 1, 1, 1, 0]))
//  ts
function forEach<T>(arr: Array<T>, callback: (item: T, index: number, arr: Array<T>) => void): void {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}

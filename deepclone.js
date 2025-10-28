function deepclone (obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (Array.isArray(obj)) return obj.map(deepclone)

  const cloned = {}
  
  for (let key in obj) {
    cloned[key] = deepclone(obj[key])
  }
  return cloned
}

const user = { name: 'Ann', info: { age: 25 } }
const copy = deepclone(user)
copy.info.age = 30
console.log(user.info.age) 
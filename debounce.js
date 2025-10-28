const input = document.querySelector('.input')

function debounce(fn, delay) {
  let timer

  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(this, args), delay)
  }
}
const onInput = debounce(() => console.log('search...'), 500)
input.addEventListener('input', onInput)

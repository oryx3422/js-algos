function trottle(fn, delay) {
  let last = 0

  return function(...args) {
    let now = Date.now()
    if(now - last >= delay){
      fn.apply(this.args)
      last = now
    }
  }
}

const onScroll = trottle(() => console.log('scroll'), 2000)

window.addEventListener('scroll', onScroll)
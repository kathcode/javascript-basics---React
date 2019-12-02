const basicExample = () => {
  console.log('a')
  console.log('b')
  console.log('c')

  /*
    Console:
    a
    b
    c
  */

  console.log('a')
  setTimeout(function() {
    console.log('b')
  }, 2000)
  console.log('c')
  /*
    Console:
    a
    c
    b
  */
}

export {
  basicExample
}
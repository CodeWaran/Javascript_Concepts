export function setupCounter(element, elementReset) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    elementReset.innerHTML = `reset`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  elementReset.addEventListener('click', () => setCounter(0))
  setCounter(0)
}

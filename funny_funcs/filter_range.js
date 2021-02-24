function filterRange(arr, a, b) {
  if (arr.length > 0) {
    return arr.slice().filter(item => item >= a && item <= b)
  }
  return []
}

module.exports = filterRange;
function multiplyNumericProps(obj, multiplier) {
  for (const prop in obj) {
    if (typeof obj[prop] == 'number') {
      obj[prop] *= multiplier
    }
  }
}

module.exports = multiplyNumericProps;
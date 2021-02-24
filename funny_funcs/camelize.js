function camelize(str) {
  str = str.split("-").filter(item => item !== '');
  if (str.length > 1) {
    return str[0] + str.slice(1).map(
      item => item[0].toUpperCase() + item.slice(1)
    ).join('');
  }
  return str.join('')
}

module.exports = camelize;
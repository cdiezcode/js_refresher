function isEmpty(obj) {
  for (let existingProp in obj) {
    return false;
  }
  return true;
}

module.exports = isEmpty;
function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("xxx") || str.includes("viagra");
}

module.exports = checkSpam;
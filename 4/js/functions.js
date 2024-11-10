
function getLengthString(string, length) {
  return string.length++ <= length;
}

getLengthString();


function checkPolindrom(string = '') {
  const normalString = string.toUpperCase().replaceAll(' ', '');
  let reverseString = '';

  for (let i = normalString.length - 1; i >= 0; i--) {
    reverseString += normalString[i];
  }
  return normalString === reverseString;
}

checkPolindrom();

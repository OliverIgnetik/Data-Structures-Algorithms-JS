const reverse = (s) => {
  if (typeof s !== 'string') {
    return Error('Input a string');
  }
  if (s.length == 1) {
    return s;
  }
  const length = s.length;
  return s[length - 1] + reverse(s.slice(0, length - 1));
};

console.log(reverse('yoyo master'));

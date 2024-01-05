/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if(s==null)
  {
      if (x == null){
      return true;
  }
  let ch = x.split('');
  let s = [];
  for (let i = 0; i < ch.length; i++) {
      if (ch[i] == '(' || ch[i] == '{' || ch[i] == '[') {
          s.push(ch[i]);
      } else if (ch[i] == ')' || ch[i] == '}' || ch[i] == ']') {
          if (s.length === 0) {
              return false;
          }
          let top = s.pop();
          if ((ch[i] == ')' && top != '(') ||
              (ch[i] == '}' && top != '{') ||
              (ch[i] == ']' && top != '[')) {
              return false;
          }
      }
  }
  return s.length === 0;  
};

module.exports = { isValid };



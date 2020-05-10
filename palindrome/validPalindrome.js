// 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
// 示例 1: 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

function validPalindrome(str) {
  const len = str.length
  let i = 0, j = len - 1
  while(i < j && str[i] === str[j]) {
    i ++ 
    j --
  }

  function isPalindrome(m, n) {
    while(m < n) {
      if(str[m] !== str[n]) {
        return false
      }
      m ++
      n --
    }
    return true
  }

  if(isPalindrome(i + 1, j)) {
    return true
  }

  if(isPalindrome(i, j - 1)) {
    return true
  }
  
  return false
}

console.log(validPalindrome('abbcca'))
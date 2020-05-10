function quickSort(array) {
  if (!Array.isArray(array) || array.length < 2) {
    return array
  }
  const target = array[0]
  let left = []
  let right = []
  for (let i = 1; i < array.length; i++) {
    if (array[i] < target) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  return [...quickSort(left), target, ...quickSort(right)]
}

console.log(quickSort([3, 2, 3, 4, 1]))

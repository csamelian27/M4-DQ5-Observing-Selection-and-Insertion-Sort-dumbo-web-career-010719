function insertionSort (arr) {
  for (var i = 0; i < arr.length; i++) {
    let value = arr[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && arr[j] > value; j--) {
      // loop through the arr in the sorted array (the arr from the current to the beginning)
      // copy each item to the next one
      arr[j + 1] = arr[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    arr[j + 1] = value
  }

  return arr
}

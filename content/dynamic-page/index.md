---
title: Find the odd Integer
image: /codewars.png
link: https://www.codewars.com/kata/54da5a58ea159efa38000836
completed: 30 October 2022

---

Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.

### Examples

<!-- Ordered List -->

1. `[7]`{lang=js} should return 7, because it occurs 1 time (which is odd).
2. `[0]`{lang=js} should return 0, because it occurs 1 time (which is odd).
3. `[1,1,2]`{lang=js} should return 2, because it occurs 1 time (which is odd).
4. `[0,1,0,1,0]`{lang=js} should return 0, because it occurs 3 times (which is odd).
5. `[1,2,2,3,3,3,4,3,3,3,2,2,1]`{lang=js} should return 4, because it appears 1 time (which is odd).


##### Original Solution

<!-- ProseCode example -->

```javascript
function findOddInt(input) {
  const count = {}
  // cycle through input integers
  for (const element of input)
  {
    // if integer exists add 1 to count
    if (count[element]) count[element] += 1  
    // add first count if it does not exist
    else count[element] = 1
  }

  // cycle through tallied integers
  Object.keys(count).forEach(key =>
  {
    // return integer if count is odd
    if ((count[key] % 2) !== 0) return Number(key)
  })

  // return null if no odd count found
  return null
}
  ```
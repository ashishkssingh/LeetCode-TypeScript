// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

function reverse(x: number): number {
  const sign = x < 0 ? -1 : 1;
  const reverse =
    Number(String(Math.abs(x)).split("").reverse().join("")) * sign;

  if (reverse < -2147483648 || reverse > 2147483647) {
    return 0;
  }
  return reverse;
}

console.log(reverse(-123));

// reverse-string.js
// Single-task program: reverses the input string and prints it.
// Usage:
//   node reverse-string.js "hello world"
// If no argument is provided, a default sample is used.

const input = process.argv.slice(2).join(' ') || 'example';

function reverseString(s) {
  // Single responsibility: return the reversed string using recursion
  // Base case: empty or single-character string is its own reverse
  if (s.length <= 1) return s;
  // Recursive case: reverse the substring from index 1 onward, then append the first char
  return reverseString(s.slice(1)) + s[0];
}

const output = reverseString(input);
console.log(output);

// Tip: this file is intentionally tiny — one function, one task.

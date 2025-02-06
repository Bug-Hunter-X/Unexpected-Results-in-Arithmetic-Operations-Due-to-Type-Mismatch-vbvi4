function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs gracefully
  }
  return a + b;
}
function reverseString(s) {
    s = s.split("");
    let temp, start = 0, end = s.length - 1;
    while (start < end) {
        temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
  return s.join("");
}

console.log(reverseString("njnschnjkdasn j32 uida"));
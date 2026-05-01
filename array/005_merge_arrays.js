// ===============================
// 5. Merge Two Sorted Arrays (No Extra Space)
// ===============================
function merge(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  function nextGap(gap) {
    if (gap <= 1) return 0;
    return Math.ceil(gap / 2);
  }

  let gap = nextGap(n + m);

  while (gap > 0) {
    let i = 0;
    let j = gap;

    while (j < n + m) {
      let a = i < n ? arr1[i] : arr2[i - n];
      let b = j < n ? arr1[j] : arr2[j - n];

      if (a > b) {
        if (i < n && j < n) {
          [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
        } else if (i < n && j >= n) {
          [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
        } else {
          [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
        }
      }

      i++;
      j++;
    }

    gap = nextGap(gap);
  }

  return [arr1, arr2];
}

// Test
let arr5_1 = [1, 4, 7, 8, 10];
let arr5_2 = [2, 3, 9];
let result = merge(arr5_1, arr5_2);

console.log("Merged Arrays:");
console.log("Array 1:", result[0]);
console.log("Array 2:", result[1]);
console.log("----------------------------------");
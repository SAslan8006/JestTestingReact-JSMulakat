// Sıralmamış bir tamsayı dizisi verildiğinde eksik olan en küçük pozitif tam sayıyı bulun...
// Input: [1,2,0]
// Output: 3
// Input: [3,4,-1,1]
// Output: 2
const findMissingPositive = function (sayiDizisi) {
    sayiDizisi.sort((a, b) => a - b);
    var len = sayiDizisi.length;
    var tmp = 0;
    var i = 0;
    while (i < len) {
        tmp = sayiDizisi[i];
        if (tmp > 0 && tmp !== i + 1 && sayiDizisi[tmp - 1] !== tmp) swapFunc(sayiDizisi, i, tmp - 1);
        else i++;
    }
    for (var j = 0; j < len; j++) {
        if (sayiDizisi[j] !== j + 1) return j + 1;
    }
    return len + 1;
}
var swapFunc = function (arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

const sayiDizisi = [3, 4, -1, 1];

console.log(findMissingPositive(sayiDizisi));
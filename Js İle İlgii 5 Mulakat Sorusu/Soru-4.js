// 4:a+b+c =0 olaracak şekilde a,b,c öğeleri varsa bunları benzersiz üçlü modeli ile array haline getirelim
// Input : [-1,0,1,2,-1,-4]
// Output : [-1,0,1]
// Output : [-1,-1,2]

const sumThree = function () {
    const array = [-1, 0, 1, 2, -1, -4];
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                if (array[i] + array[j] + array[k] === 0) {
                    result.push([array[i], array[j], array[k]]);
                }
            }
        }
    }
    return result;
}
console.log(sumThree())


const sumThree1 = function (nums) {
    var len = nums.length;
    let res = [];
    var l = 0;
    var r = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        l = i + 1;
        r = len - 1;
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } else if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++;
                r--;
            }
        }
    }
    return res
}

console.log(sumThree1([-1, 0, 1, 2, -1, -4]))
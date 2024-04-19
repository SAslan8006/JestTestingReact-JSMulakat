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
                    result.push(array[i], array[j], array[k]);
                }
            }
        }
    }
}
console.log(sumThree)
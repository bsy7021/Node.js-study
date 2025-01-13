const numbers = [1,2,3,4,5,6,7,8,9]

// 배열 요소의 합계

// reduce(( 이전 반환 값, 현재 요소 값, 인덱스, 배열 ) => {}, 초기값 )
const sum = numbers.reduce((sum, number, index, array) => {
    return sum + number
}, 5)

console.log(sum)
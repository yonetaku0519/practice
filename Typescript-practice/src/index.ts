// // 危険な書き方（n、totalともにanyであると型推論してしまう）
// function sumVariadic(): number {
//     return Array
//         .from(arguments)
//         .reduce((total, n) => total + n,0)
// }
// // エラーとなる「0 個の引数が必要ですが、4 個指定されました」
// console.log(sumVariadic(1,2,3,4))

// 安全な書き方（レストパラメーター）
function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}
console.log(sumVariadicSafe(1,2,3,4))

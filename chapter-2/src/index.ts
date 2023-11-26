let a: {
    b: number
    c?: string
    [key: number]: boolean
}

a = {b: 1}
console.log(a)
a = {b: 1, c:undefined}
console.log(a)
a = {b: 1,c:'d'}
console.log(a)
a = {b: 1,10: true, 20: false}
console.log(a)
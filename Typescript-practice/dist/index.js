"use strict";
let x = {
    a() {
        return this;
    }
};
// { a: [Function: a] }が出力される
console.log(x.a());
// aを再割り当てし、呼び出すと結果が変わる
// undefinedが出力される
let a = x.a;
console.log(a());
//# sourceMappingURL=index.js.map
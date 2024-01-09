function map<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = []
    for(let i = 0; i < array.length; i++) {
        result[i] = f(array[i])
    }
    return result
}
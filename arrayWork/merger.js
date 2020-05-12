function merger(arr1, arr2) {
    let out = []
    while (arr1.length > 0 && arr2.length > 0) {
        // console.log(arr1)
        // console.log(arr2)
        // console.log(out)
        if (arr1[0] < arr2[0])
            out.push(arr1.shift())
        else
            out.push(arr2.shift())
    }
    return out
}

console.log(merger([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))
function filt(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            arr.splice(i, 1)
            i--;
        }
    }
    return arr
}

console.log(filt([1, 5, 1, 2, 4, 34, 87, 7, 4]))
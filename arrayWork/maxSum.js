function maxSum(arr) {
    let maxSum = 0
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
        if (temp > maxSum)
            maxSum = temp
    }
    return maxSum
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))
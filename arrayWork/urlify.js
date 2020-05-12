function url(string) {
    let arr = []

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) !== " ")
            arr.push(string.charAt(i))
        else
            arr.push("%20")
    }
    return arr.join("")
}

console.log(url("tauhida parveen"))
console.log(url("www.thinkful.com /tauh ida parv een"))
module.exports = function reverse (n) {
    let absN = Math.abs(n);
    let arr = [absN].join().split('').reverse();
    let numString = '';

    arr.forEach(item => {
        numString += item;
    })
    return Number(numString);
}

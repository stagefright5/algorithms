const fcache = {};

const fibonacciRecc = (n, arr = []) => {
    if (n <= 1) {
        arr.push(1);
        return 1;
    }
    // compute fibanocci(n) only if not already present in the `store` 
    const n_1 = fcache[n - 1] || (fcache[n - 1] = fibonacciRecc(n - 1, arr))
    const n_2 = fcache[n - 2] || (fcache[n - 2] = fibonacciRecc(n - 2, arr))
    const fib_n = n_1 + n_2;
    arr.push(fib_n);
    return fib_n;
}

const fibonacciIter = (n) => {
    let fib0 = 0, fib1 = 1, fib = 1;
    let i = 0;
    while (i < n) {
        fib = fib0 + fib1;
        fib0 = fib1;
        fib1 = fib;
        i++;
    }
    return fib;
}

const fibonacciNumbers = (n) => {
    const arr = [];
    if (n >= 0) {
        arr.push(1);
        if (n >= 1) {
            arr.push(1);
        }
    }
    let i = 0;
    while (i < n - 1) {
        arr.push(arr[i + 1] + arr[i]);
        i++;
    }
    return arr;
}
const n = parseInt(process.argv[2]);
console.log(fibonacciIter(n));
fibonacciRecc(n, (arr = []))
console.log(arr);
console.log(fibonacciNumbers(n));
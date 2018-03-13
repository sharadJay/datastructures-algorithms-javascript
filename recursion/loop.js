let loop = function (number, call) {
    if (number > 0) {
        call(number);
        loop(number - 1, call);
    }
}

loop(5, n => console.log(`called ${n}`));
function receivesAFunction(newFunction) {
    newFunction();
}


function returnsANamedFunction() {
    const functionName = function() {
        return 1;
    }
    return functionName;
}


function returnsAnAnonymousFunction() {
    return (function() {
        return 0;
    });
}

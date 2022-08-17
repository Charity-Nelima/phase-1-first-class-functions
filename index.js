function receivesAFunction (spy){
    // console.log (spy);
    spy();
}
// receivesAFunction()
function returnsANamedFunction() {
    function makeBreakfast() {return " "}
    return makeBreakfast;
}

function returnsAnAnonymousFunction() {
    return function(){}
}

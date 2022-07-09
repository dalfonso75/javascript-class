(function () {
    var foo = "ABC";

    // Esto imprime "ABC"
    console.log(foo);
})();

// ReferenceError: foo is not defined
console.log(foo);



function miFuncionInmediata () {
    var foo = "ABC";

    // Esto imprime "ABC"
    console.log(foo);
}

miFuncionInmediata();

// ReferenceError: foo is not defined
console.log(foo);
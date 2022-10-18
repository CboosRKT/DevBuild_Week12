console.log("Taco Time");
function Add1(x, y) {
    return x + y;
}
var Add2 = function (x, y) {
    return x + y;
};
var Multiply1 = function (x, y) {
    return x * y;
};
console.log(Multiply1(6, 5));
var Mult2 = function (x, y) { return x * y; };
console.log(Mult2(10, 20));
var Hello = function () {
    console.log('Hello!');
};
Hello();
//setInterval(Hello, 3000); 
setInterval(function () {
    console.log('Hello');
}, 3000);

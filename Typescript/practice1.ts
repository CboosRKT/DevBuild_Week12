console.log("Taco Time");

function Add1(x: number, y: number): number{
    return x +y;
}

let Add2 = function(x:number, y:number):number {
    return x + y;
}

let Multiply1 = (x: number, y: number): number => {
    return x*y;
}

console.log(Multiply1(6,5));

let Mult2 = (x: number, y: number): number => x*y;

console.log(Mult2(10,20));

let Hello = () =>{
    console.log('Hello!')
}

Hello();

//setInterval(Hello, 3000); 

setInterval(
() => {
    console.log('Hello');
}, 3000
);

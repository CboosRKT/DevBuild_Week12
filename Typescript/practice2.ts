let nums: number[] = [5,6,10,3,2];
console.log("regular for loop");

for (let index:number=0; index < nums.length; index++){
console.log(nums[index] * 2);
}

console.log('for each loop');
let f1 = (p: number) => {
    console.log(p * 2);
}

nums.forEach(f1);


console.log("for each again: ");
nums.forEach(

    (p: number) => {
        console.log(p * 2);
    }

);

console.log("for-of version");

for (let num of nums){
    console.log(num * 4);
}
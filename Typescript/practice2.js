var nums = [5, 6, 10, 3, 2];
console.log("regular for loop");
for (var index = 0; index < nums.length; index++) {
    console.log(nums[index] * 2);
}
console.log('for each loop');
var f1 = function (p) {
    console.log(p * 2);
};
nums.forEach(f1);
console.log("for each again: ");
nums.forEach(function (p) {
    console.log(p * 2);
});
console.log("for-of version");
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    console.log(num * 4);
}

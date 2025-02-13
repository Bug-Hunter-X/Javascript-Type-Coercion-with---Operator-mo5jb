function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;}
else{
return 'Invalid input type';
}
}
console.log(foo(1,2)); //3
console.log(foo(1,"2")); //Invalid input type
console.log(foo(1,true)); //Invalid input type

function foo2(a,b){return Number(a) + Number(b);}
console.log(foo2(1, '2')); //3
console.log(foo2(1, true)); //2
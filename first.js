console.log("hello");
console.log(5+5);
alert("Stop first goes on inspect page")
var a=5;
var b=6;
var c=a+b;

str="nksajd";
isFollow=true;
const student={
    name:"maa",
    cgpa:9.0
};
console.log(isFollow);
function sub(a)
{
    a();
}
sub (function(){
    console.log("ghj");
})
function dosomething()
{
    console.log(this);
}
dosomething();
var obj={
    name:"maa",
    getName:function(){
        console.log(this.name);
    }
}
obj.getName;
let d=2;
// let b=3;
console.log("d=",d);

var naam=prompt("eneter your name");
console.log("your name is "+naam);

// let age=25;
// if(age>18){
// console.log("can vote ");
// }
let mode="light";
let color;
if(mode==="dark")
{
    color="black";
}
if(mode==="light")
{
    color="white";
}
console.log(color);
let num=prompt("enter the number");

if(num%5===0){
    console.log(num,"is divisible");
}else{
  console.log(num,"is not divisible");
}
let age=16;
age>=18?"adult":"not adult";
const choice='exp';
switch(choice){
    case 'orange':console.log("hello");
    break;
    case 'mango':console.log("g");
    break;
    default:
        console.log('fcghj ${exp},');
}
let sum=0;
for(let i=0;i<=5;i++)

sum=sum+i;

console.log(sum);
// let i=20;
// do{
//     console.log("apna jhdb");
//     i--;
// }while(i>=0);
let str2="javascript";
var size=0;
// for-of
for (let i of str2){
    console.log("i=",i);
    size++;
}
console.log("are size",size);
// for-in loop which is used to object and array
let obj2={
    name:"ram",
    ispass:true,
    cgpa:8.2
};
for(let key in obj2)
{
    console.log("key= ",key , "value = ",obj2[key] );
}

for(let j=0;j<=100;j++)
{
    if(j%2!=0)
    console.log(j);
}
let gamenum =25;
let usernum=prompt("Guees the game number:");
while(usernum!=gamenum)
{
    usernum=prompt("you enetered wrong number,guess the game number:");
}
console.log("congrulation ,you enter the right number");

let arr=[1,2,3,4,5];
//for of loop jo likha h vhi ka vhi dega
for(let i of arr)
{
    console.log(i);
}
//for in loop 0 bi saath me dega uder se fir ek km krdega
for(let i in arr)
{
    console.log(i);
}

for(let i=0;i<=arr.length;i++)
{
    console.log(i);
}
let mark=[85,97,44,37,76,60];
let sum1=0;
for(let avg of mark)
{
    sum1=sum1+avg;
}
sum1=sum1/mark.length;
console.log(`avg marks of the class = ${sum1}`);

let item=[250,645,500,320,654];
let idex=0;
for(let fv of item)
{
    console.log(`value of index ${idex}=${val}`);
    let offer=val/10;
    item[i]-=offer;
    idex++;
}
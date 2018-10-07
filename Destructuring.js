//De_structuring the objects

// let a,b;
// [a,b , ...rest]=[100,200,300,400,500,900,5000,4000];
// console.log(rest);

//Aray of objects

// let a,b;
// [{a,b,...rest}]=[{a:100,b:200,c:300,d:400,e:500,f:900,g:5000,h:4000}];
//   console.log(rest);



const ArrayName=['sulman','Ahmed','awan'];

let Fname,Lname,Cast;
[Fname,Lname,cast]=ArrayName;
console.log(`First_Name:${Fname}, Last_name:${Lname},Cast:${cast}`);
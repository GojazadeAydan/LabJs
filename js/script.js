"use strict"
//1)
//regular 
// function result(m) {
//     if(m>20 && m<50){
//         let res=m*3;
//       console.log(res);
//     }
//     else{
//         let res=m-5;
//         console.log(res);
//     }
// }
// result(35);

//regular with return
// function result(m) {
//     if(m>20 && m<50){
//         let res=m*3;
//         return res;
//     }
//     else{
//         let res=m-5;
//         return res;
//     }
// }
// console.log(result(78));

//arrow func
// const result=(m)=>{
//     if(m>20 && m<50){
//         let res=m*3;
//         console.log(res);
//     }
//     else{
//         let res=m-5;
//         console.log(res);
//     }
// }
// result(78);

//arrow with return
// const result=(m)=>{
//     if(m>20 && m<50){
//         let res=m*3;
//         return res;
//     }
//     else{
//         let res=m-5;
//         return res;
//     }
// }
// console.log(result(78));

//2)
//regular
// function result(a,b){
//     if(a%2==0 && b%2==0){
//         let res=a*b;
//         console.log(res);
//     }
//     else{
//         let res=a+b;
//         console.log(res);

//     }
// }
// result(8,4);

//regular with return
// function result(a,b){
//     if(a%2==0 && b%2==0){
//         let res=a*b;
//         return res;
//     }
//     else{
//         let res=a+b;
//          return res;

//     }
// }
// console.log(result(8,4));


//arrow func
// const result=(a,b)=>{
//     if(a%2==0 && b%2==0){
//         let res=a*b;
//         console.log(res);
//     }
//     else{
//         let res=a+b;
//         console.log(res);

//     }
// }
// result(8,4);

//arrow with return
// const result=(a,b)=>{
//     if(a%2==0 && b%2==0){
//         let res=a*b;
//         return res;
//     }
//     else{
//         let res=a+b;
//          return res;

//     }
// }
// console.log(result(8,4));

//3)
//regular
// function result(m) {
//     if(m%5==0){
//         let res=m**2;
//         console.log(res);

//     }
//     else{
//         let res=m**3;
//         console.log(res);
//     }
// }
// result(6);

//regular with return
// function result(m) {
//     if(m%5==0){
//         let res=m**2;
//         return res;

//     }
//     else{
//         let res=m**3;
//         return res;
//     }
// }
// console.log(result(6));

//arrow func
// const result=(m)=>{
//     if(m%5==0){
//         let res=m**2;
//         console.log(res);

//     }
//     else{
//         let res=m**3;
//         console.log(res);
//     }
// }
// result(6);

//arrow with return
// const result=(m)=>{
//     if(m%5==0){
//         let res=m**2;
//         return res;

//     }
//     else{
//         let res=m**3;
//         return res;
//     }
// }
// console.log(result(6));

//4)
//regular
// function sum(m) {
//     let sum=0;
//     for (let i = m; i < 1 ; i++) {
//         if(i%2==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);
// }
// sum(-6);

//regular with return
// function sum(m) {
//     let sum=0;
//     for (let i = m; i < 1 ; i++) {
//         if(i%2==0){
//             sum+=i;
//         }
//     }
//     return sum;
// }
// console.log(sum(-6));

//arrow with return
// const sum=(m)=>{
//     let sum=0;
//     for (let i = m; i < 1 ; i++) {
//         if(i%2==0){
//             sum+=i;
//         }
//     }
//     return sum;
// }
// console.log(sum(-6));

//arrow func
// const sum=(m)=>{
//     let sum=0;
//     for (let i = m; i < 1 ; i++) {
//         if(i%2==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);

// }
// sum(-6);
//5)
//regular
// function result(n,m) {
//     let res=1;
//     for (let i = n; i < m; i++) {
//         if(i%4==0){
//             res*=i;
//         }
//     }
//     console.log(res);

// }
// result(4,10);

//regular with return
// function result(n,m) {
//     let res=1;
//     for (let i = n; i < m; i++) {
//         if(i%4==0){
//             res*=i;
//         }
//     }
//     return res;

// }
// console.log(result(4,10));

//arrow func
// const result=(n,m)=>{
//     let res=1;
//     for (let i = n; i < m; i++) {
//         if(i%4==0){
//             res*=i;
//         }
//     }
//     console.log(res);

// }
// result(4,10);

//arrow with return
// const result=(n,m)=>{
//     let res=1;
//     for (let i = n; i < m; i++) {
//         if(i%4==0){
//             res*=i;
//         }
//     }
//     return res;

// }
// console.log(result(4,10));

//6)
// function result(a) {
//     for (let i = 1; i <= a ; i++) {
//         if(a%i==0){
//             console.log(i);
//         }
//     }
// }
// result(6);

// regular with return
// function result(a) {
//     let res=[];
//     for (let i = 1; i <= a ; i++) {
//         if(a%i==0){
//             res.push(i);
//         }
//     }
//     return res

// } 
// console.log(result(6));

//arrow func
// const result=(a)=>{
//     for (let i = 1; i <= a ; i++) {
//         if(a%i==0){
//             console.log(i);
//         }
//     }
// }
// result(6);

//arrow with return
// const result=(a)=>{
//     let res=[];
//     for (let i = 1; i <= a ; i++) {
//         if(a%i==0){
//             res.push(i);
//         }
//     }
//     return res;

// } 
// console.log(result(6));

//7)
//regular
// function result(m,n) {
//     let count=0;
//     for (let i = m; i < n; i++) {
//         if (i%3==0) {
//             count+=1;
//         }
//     }
//     console.log(count);
// }
// result(4,8);

//regular with return
// function result(m,n) {
//     let count=0;
//     for (let i = m; i < n; i++) {
//         if (i%3==0) {
//             count+=1;
//         }
//     }
//     return count;
// }
// console.log(result(4,10));

//arrow gunc
// const result=(m,n)=>{
//     let count=0;
//     for (let i = m; i < n; i++) {
//         if (i%3==0) {
//             count+=1;
//         }
//     }
//     console.log(count);

// }
// result(4,10);


//arrow with return
// const result=(m,n)=>{
//     let count=0;
//     for (let i = m; i < n; i++) {
//         if (i%3==0) {
//             count+=1;
//         }
//     }
//     return count;
// }
// console.log(result(4,10));

//8)
//regular
// function sum(m,n) {
//     let sum=0;
//     for (let i = m; i < n; i++) {
//         if(i%7==0){
//             sum+=i
//         }
//     }
//     console.log(sum);
// }
// sum(3,15);

//regular with return
// function sum(m,n) {
//     let sum=0;
//     for (let i = m; i < n; i++) {
//         if(i%7==0){
//             sum+=i
//         }
//     }
//     return sum;
// }
// console.log(sum(3,15));

//arrow
// const sum=(m,n)=>{
//     let sum=0;
//     for (let i = m; i < n; i++) {
//         if(i%7==0){
//             sum+=i
//         }
//     }
//     console.log(sum);
// }
// sum(3,15);

//arrow with return
// const sum=(m,n)=>{
//     let sum=0;
//     for (let i = m; i < n; i++) {
//         if(i%7==0){
//             sum+=i
//         }
//     }
//     return sum;
// }
// console.log(sum(3,15));


//9)
//regular
// function result(m,n) {
//     for (let i = m; i < n; i++) {
//         if(i%2==0 && i%3==0){
//             console.log(i);
//         }
//     }
// }
// result(4,8);

//regular with return
// function result(m,n) {
//     let res=[];
//     for (let i = m; i < n; i++) {
//         if(i%2==0 && i%3==0){
//             res.push(i);
//         }
//     }
//     return res;
// }
//console.log(result(4,20));

//arrow func
// const result=(m,n)=>{
//     for (let i = m; i < n; i++) {
//         if(i%2==0 && i%3==0){
//             console.log(i);
//         }
//     }
// }
// result(4,8);


//arrow with return
// const result=(m,n)=>{
//     let res=[];
//     for (let i = m; i < n; i++) {
//         if(i%2==0 && i%3==0){
//             res.push(i);
//         }
//     }
//     return res;
// }
// console.log(result(4,20));

//10)
//regular
// function maxNum(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let max=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>=max){
//             max=nums[i];
//         }
//     }
//     console.log(max);
// }
// maxNum(677);

//regular with return
// function maxNum(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let max=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>=max){
//             max=nums[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum(677));

//arrow func
// const maxNum=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let max=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>=max){
//             max=nums[i];
//         }
//     }
//     console.log(max);
// }
// maxNum(677);


//arrow with return
// const maxNum=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let max=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>=max){
//             max=nums[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum(677));

//11)
//regular
// function minNum(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let min=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]<=min){
//             min=nums[i];
//         }
//     }
//     console.log(min);
// }
// minNum(607);

//regular with return
// function minNum(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let min=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]<=min){
//             min=nums[i];
//         }
//     }
//     return min;
// }
// console.log(minNum(607));

//arrow func
// const minNum=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let min=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]<=min){
//             min=nums[i];
//         }
//     }
//     console.log(min);

// }
// minNum(607);


//arrow with return
// const minNum=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let min=nums[0];
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]<=min){
//             min=nums[i];
//         }
//     }
//     return min;
// }
// console.log(minNum(607));

//12)
//regular
// function oddOrEven(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         sum+=nums[i];
//     }
//     if(sum%2==0){
//         console.log("cut");
//     }
//     else{
//         console.log("tek");

//     }
// }
// oddOrEven(607);

//regular with return
// function oddOrEven(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         sum+=nums[i]
//     }
//     if(sum%2==0){
//         return "cut";
//     }
//     else{
//         return "tek";

//     }
// }
// console.log(oddOrEven(62));

//arrow func
// const oddOrEven=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         sum+=nums[i]
//     }
//     if(sum%2==0){
//         console.log("cut");
//     }
//     else{
//         console.log("tek");

//     }
// }
// oddOrEven(608);


//arrow with return
// const oddOrEven=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         sum+=nums[i]
//     }
//     if(sum%2==0){
//         return "cut";
//     }
//     else{
//         return "tek";

//     }
// }
// console.log(oddOrEven(62));

//13)
//regular
// function evenCount(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==0){
//             sum+=1;
//         }
//     }
//    console.log(sum);
// }
// evenCount(608);

//regular with return
// function evenCount(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==0){
//             sum+=1;
//         }
//     }
//    return sum;
// }
// console.log(evenCount(608));

//arrow func
// const evenCount=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==0){
//             sum+=1;
//         }
//     }
//    console.log(sum);
// }
// evenCount(608);

//arrow with return
// const evenCount=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==0){
//             sum+=1;
//         }
//     }
//    return sum;
// }
// console.log(evenCount(608));

//14)
//regular
// function oddCount(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==1){
//             sum+=1;
//         }
//     }
//    console.log(sum);
// }
// oddCount(67);

//regular with return
// function oddCount(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==1){
//             sum+=1;
//         }
//     }
//    return sum;
// }
// console.log(oddCount(67));

//arrow func
// const oddCount=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==1){
//             sum+=1;
//         }
//     }
//    console.log(sum);
// }
// oddCount(92247);


//arrow with return
// const oddCount=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]%2==1){
//             sum+=1;
//         }
//     }
//    return sum;
// }
// console.log(oddCount(67));

//15)
//regular
// function oddCount(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>5){
//             sum+=nums[i];
//         }
//     }
//    console.log(sum);
// }
// oddCount(647);

//regular with return
// function oddCount(m) {
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>5){
//             sum+=nums[i];
//         }
//     }
//    return sum;
// }
// console.log(oddCount(647));

//arrow func
// const oddCount=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>5){
//             sum+=nums[i];
//         }
//     }
//    console.log(sum);
// }
// oddCount(647);

//arrow with return
// const oddCount=(m)=>{
//     let nums=[];
//     let n;
//     while(m>=1){
//         n=m%10;
//         nums.push(n);
//         m=Math.floor(m/10);
//     }
//     let sum=0;
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]>5){
//             sum+=nums[i];
//         }
//     }
//    return sum;
// }
// console.log(oddCount(647));

//16) 
//regular
// function reverseNum(m) {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums.join("");
//     console.log(res);
// }
// reverseNum(245);

//regular with return
// function reverseNum(m) {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums.join("");
//     return res;
// }
// console.log(reverseNum(245));

//arrow func
// const reverseNum=(m)=>{
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums.join("");
//     console.log(res);
// }
// reverseNum(245);

//arrow with return
// const reverseNum=(m)=>{
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums.join("");
//     return res;
// }
// console.log(reverseNum(245));

//17)
//regular 
// function palindrome(m) {
//     let original=m;
//     let n;
//     let z=0;
//     while (m >= 1) {
//         n = m % 10;
//         z=z*10+n;
//         m = Math.floor(m / 10);
//     }
//     if(original==z){
//         console.log("polindrom");
//     }
//     else{
//         console.log("polindrom deyil");

//     }

// }
// palindrome(122);

//regular with return
// function palindrome(m) {
//     let original=m;
//     let n;
//     let z=0;
//     while (m >= 1) {
//         n = m % 10;
//         z=z*10+n;
//         m = Math.floor(m / 10);
//     }
//     if(original==z){
//         return "polindrom";
//     }
//     else{
//         return "polindrom deyil";

//     }

// }
// console.log(palindrome(121));

//arrow func
// const palindrome=(m)=>{
//     let original=m;
//     let n;
//     let z=0;
//     while (m >= 1) {
//         n = m % 10;
//         z=z*10+n;
//         m = Math.floor(m / 10);
//     }
//     if(original==z){
//         console.log("polindrom");
//     }
//     else{
//         console.log("polindrom deyil");

//     }

// }
// palindrome(121);

//arrow with return
// const palindrome=(m)=>{
//     let original=m;
//     let n;
//     let z=0;
//     while (m >= 1) {
//         n = m % 10;
//         z=z*10+n;
//         m = Math.floor(m / 10);
//     }
//     if(original==z){
//         return "polindrom";
//     }
//     else{
//         return "polindrom deyil";

//     }

// }
// console.log(palindrome(121));

//18)
//regular 
// function sumOfFirstAndLastNum(m){
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums[0]+nums[nums.length-1]
//     console.log(res);
// }
// sumOfFirstAndLastNum(245);

//regular with return
// function sumOfFirstAndLastNum(m){
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums[0]+nums[nums.length-1]
//     return res;
// }
// console.log(sumOfFirstAndLastNum(245));

//arrow func
// const sumOfFirstAndLastNum=(m)=>{
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums[0]+nums[nums.length-1]
//     console.log(res);
// }
// sumOfFirstAndLastNum(245);

//arrow with return
// const sumOfFirstAndLastNum=(m)=>{
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res=nums[0]+nums[nums.length-1]
//     return res;
// }
// console.log(sumOfFirstAndLastNum(245));

//19)
//regular
// function countOfZero(m) {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countOfZero(24005);

//regular with return
// function countOfZero(m) {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOfZero(24005));

//arrow func
// const countOfZero=(m)=> {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countOfZero(24005);

//arrow with return
// const countOfZero=(m)=> {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countOfZero(24005));

//20
//regular
// function resOfNums(m) {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res = 1;
//     for (let i = 0; i < nums.length; i++) {
//         res *= nums[i];
//     }
//     console.log(res);

// }
// resOfNums(245);

//regular with return
// function resOfNums(m) {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res = 1;
//     for (let i = 0; i < nums.length; i++) {
//         res *= nums[i];
//     }
//     return res;

// }
// console.log(resOfNums(245));

//arrow func
// const resOfNums=(m)=> {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res = 1;
//     for (let i = 0; i < nums.length; i++) {
//         res *= nums[i];
//     }
//     console.log(res);

// }
// resOfNums(245);

//arrow with return
// const resOfNums=(m)=> {
//     let nums = [];
//     let n;
//     while (m >= 1) {
//         n = m % 10;
//         nums.push(n);
//         m = Math.floor(m / 10);
//     }
//     let res = 1;
//     for (let i = 0; i < nums.length; i++) {
//         res *= nums[i];
//     }
//     return res;

// }
// console.log(resOfNums(245));

//21)
//regular
// function higherThanTen(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>10){
//             count++;
//         }
//     }
//     console.log(count);
// }
// higherThanTen([4,36,14,1]);

//regular with return
// function higherThanTen(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>10){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(higherThanTen([4,,125,36,14,1]));

//arrow func
// const higherThanTen=(arr)=>{
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>10){
//             count++;
//         }
//     }
//     console.log(count);
// }
// higherThanTen([4,36,14,1]);

//arrow with return
// const higherThanTen=(arr)=>{
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>10){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(higherThanTen([4,,125,36,14,1]));

//22)
//regular
// function lessThanTen(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<10){
//             sum+=arr[i];
//         }
//     }
//     console.log(sum);
// }
// lessThanTen([4,36,14,1]);

//regular with return
// function lessThanTen(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<10){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }
// console.log(lessThanTen([4,36,14,1]));

//arrow func
// const lessThanTen=(arr)=>{
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<10){
//             sum+=arr[i];
//         }
//     }
//     console.log(sum);
// }
// lessThanTen([4,36,14,1]);

//arrow with return
// const lessThanTen=(arr)=>{
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<10){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }
// console.log(lessThanTen([4,36,14,1]));

//23)
//regular
// function canBeDividedByThree(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%3==0){
//             console.log(arr[i]);

//         }
//     }
// }
// canBeDividedByThree([4,36,14,1,3]);

//regular with retur
// function canBeDividedByThree(arr) {
//     return arr.filter(m => m % 3 == 0);
// }
// console.log(canBeDividedByThree([4, 36, 14, 1, 3]));

//arrow func
// const canBeDividedByThree=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%3==0){
//             console.log(arr[i]);

//         }
//     }
// }
// canBeDividedByThree([4,36,14,1,3]);

//arrow with return
// const canBeDividedByThree=(arr)=>{
//     return arr.filter(m => m % 3 == 0);
// }
// console.log(canBeDividedByThree([4, 36, 14, 1, 3]));

//24)
//regular 
// function canBeDividedByFive(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%5==0){
//             count++;
//         }
//     }
//     console.log(count);

// }
// canBeDividedByFive([4,36,14,5,1,3]);

//regular with return
// function canBeDividedByFive(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%5==0){
//             count++;
//         }
//     }
//     return count;

// }
// console.log(canBeDividedByFive([4,25,36,14,5,1,3]));

//arrow func
// const canBeDividedByFive=(arr)=>{
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%5==0){
//             count++;
//         }
//     }
//     console.log(count);


// }
// canBeDividedByFive([4,25,36,14,5,1,3]);

//arrow with return
// const canBeDividedByFive=(arr)=>{
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%5==0){
//             count++;
//         }
//     }
//     return count;

// }
// console.log(canBeDividedByFive([4,25,36,14,5,1,3]));

//25)
//regular
// function sumOfNegatives(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             sum+=arr[i];
//         }
//     }
//     console.log(sum);
// }
// sumOfNegatives([-52,4,3,1,-5]);

//regular with return
// function sumOfNegatives(arr){
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumOfNegatives([-52,4,3,1,-5]));

//arrow fucn
// const sumOfNegatives=(arr)=>{
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             sum+=arr[i];
//         }
//     }
//     console.log(sum);

// }
// sumOfNegatives([-52,4,3,1,-5]);

//arrow with return
// const sumOfNegatives=(arr)=>{
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             sum+=arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumOfNegatives([-52,4,3,1,-5]));

//26)
//regular
// function resOfPositives(arr) {
//     let res=1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>0){
//             res*=arr[i];
//         }
//     }
//     console.log(res);
// }
// resOfPositives([-52,4,3,1,-5]);

//regular with return
// function resOfPositives(arr) {
//     let res=1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>0){
//             res*=arr[i];
//         }
//     }
//     return res;
// }
// console.log(resOfPositives([-52,4,3,1,-5]));

//arrow func
// const resOfPositives=(arr)=> {
//     let res=1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>0){
//             res*=arr[i];
//         }
//     }
//     console.log(res);
// }
// resOfPositives([-52,4,3,1,-5]);

//arrow with return
// const resOfPositives=(arr)=> {
//     let res=1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]>0){
//             res*=arr[i];
//         }
//     }
//     return res;
// }
// console.log(resOfPositives([-52,4,3,1,-5]));

//27)
//regular
// function isZero(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==0){
//             count++;
//         }
//     }
//     console.log(count);
// }
// isZero([5,2,0,56,2,0,0]);

//regular with return
// function isZero(arr){
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(isZero([5,2,0,56,2,0,0]));

//arrow func
// const isZero=(arr)=>{
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==0){
//             count++;
//         }
//     }
//     console.log(count);
// }
// isZero([5,2,0,56,2,0,0]);

//arrow with return
// const isZero=(arr)=>{
//     let count=0;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==0){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(isZero([5,2,0,56,2,0,0]));

//28)
//regular
// function firstEvenNum(arr) {
//     let res=arr.find(m=>m%2==0);
//     console.log(res);
// }
// firstEvenNum([3,12,6,7]);

//regular with return
// function firstEvenNum(arr) {
//     let res=arr.find(m=>m%2==0);
//     return res;
// }
// console.log(firstEvenNum([3,12,6,7]));

//arrow func
// const firstEvenNum=(arr)=> {
//     let res=arr.find(m=>m%2==0);
//     console.log(res);
// }
// firstEvenNum([3,12,6,7]);

//arrow with return
// const firstEvenNum=(arr)=> {
//     let res=arr.find(m=>m%2==0);
//     return res;
// }
// console.log(firstEvenNum([3,12,6,7]));

//29)
//regular
// function lastOddNum(arr) {
//     let res=arr.findLast(m=>m%2==1);
//     console.log(res);
// }
// lastOddNum([3,12,6,7]);

//regular with return
// function lastOddNum(arr) {
//     let res=arr.findLast(m=>m%2==1);
//     return res;
// }
// console.log(lastOddNum([3,12,6,7]));

//arrow func
// const lastOddNum=(arr)=> {
//     let res=arr.findLast(m=>m%2==1);
//     console.log(res);
// }
// lastOddNum([3,12,6,7]);

//arrow with return
// const lastOddNum=(arr)=> {
//     let res=arr.findLast(m=>m%2==1);
//     return res;
// }
// console.log(lastOddNum([3,12,6,7,5,8]));

//30)
//regular
// function differenceBetweenMaxAndMin(arr) {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity);
//     let res=max-min;
//     console.log(res);
// }
// differenceBetweenMaxAndMin([3,12,6,7,5,8]);

//regular with return
// function differenceBetweenMaxAndMin(arr) {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity);
//     let res=max-min;
//     return res;
// }
// console.log(differenceBetweenMaxAndMin([3,12,6,7,5,8]));

//arrow func
// const differenceBetweenMaxAndMin=(arr)=> {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity);
//     let res=max-min;
//     console.log(res);
// }
// differenceBetweenMaxAndMin([3,12,6,7,5,8]);

//arrow with return
// const differenceBetweenMaxAndMin=(arr)=> {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity);
//     let res=max-min;
//     return res;
// }
// console.log(differenceBetweenMaxAndMin([3,12,6,7,5,8]));

//31)
//regular
// function avgOfElements(arr){
//     let avg=0;
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     let res=sum/arr.length;
//     console.log(res);
// }
// avgOfElements([3,12,6]);

//regular with return
// function avgOfElements(arr){
//     let avg=0;
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     let res=sum/arr.length;
//     return res;
// }
// console.log(avgOfElements([3,12,6]));

//arrow func
// const avgOfElements=(arr)=>{
//     let avg=0;
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     let res=sum/arr.length;
//     console.log(res);
// }
// avgOfElements([3,12,6]);

//arrow with return
// const avgOfElements=(arr)=>{
//     let avg=0;
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     let res=sum/arr.length;
//     return res;
// }
// console.log(avgOfElements([3,12,6]));

//32)
//regular 
// function between20And50(arr){

//     let res=arr.filter(m=>m>20 && m<50).length;
//     console.log(res);
// }
// between20And50([45,145,2,62,32]);

//regular with return
// function between20And50(arr){

//     let res=arr.filter(m=>m>20 && m<50).length;
//     return res;
// }
// console.log(between20And50([45,145,2,62,32]));

//arrow func
// const between20And50=(arr)=>{

//     let res=arr.filter(m=>m>20 && m<50).length;
//     console.log(res);
// }
// between20And50([45,145,2,62,32]);

//arrow with return
// const between20And50=(arr)=>{

//     let res=arr.filter(m=>m>20 && m<50).length;
//     return res;
// }
// console.log(between20And50([45,145,2,62,32]));

//33)
//regular
// function negativeAndEven(arr) {
//     let res=arr.filter(m=>m<0 && m%2==0);
//     console.log(res);
// }
// negativeAndEven([53,-8,245,-25,2,0]);

//regular with return
// function negativeAndEven(arr) {
//     let res=arr.filter(m=>m<0 && m%2==0);
//     return res;
// }
// console.log(negativeAndEven([53,-8,245,-25,2,0]));

//arrow func
// const negativeAndEven=(arr)=> {
//     let res=arr.filter(m=>m<0 && m%2==0);
//     console.log(res);
// }
// negativeAndEven([53,-8,245,-25,2,0,-4]);

//arrow with return
// const negativeAndEven=(arr)=> {
//     let res=arr.filter(m=>m<0 && m%2==0);
//     return res;
// }
// console.log(negativeAndEven([53,-8,245,-25,2,0]));

//34)
//regular
// function positiveAndOdd(arr){
//     let res=arr.filter(m=>m>0 && m%2==1).reduce((a, b) => a + b, 0);
//     console.log(res);
// }
// positiveAndOdd([53,-8,245,-25,2,0]);

//regular with return
// function positiveAndOdd(arr){
//     let res=arr.filter(m=>m>0 && m%2==1).reduce((a, b) => a + b, 0);
//     return res;
// }
// console.log(positiveAndOdd([53,-8,245,-25,2,0]));

//arrow func
// const positiveAndOdd=(arr)=>{
//     let res=arr.filter(m=>m>0 && m%2==1).reduce((a, b) => a + b, 0);
//     console.log(res);
// }
// positiveAndOdd([53,-8,245,-25,2,0]);

//arrow with return
// const positiveAndOdd=(arr)=>{
//     let res=arr.filter(m=>m>0 && m%2==1).reduce((a, b) => a + b, 0);
//     return res;
// }
// console.log(positiveAndOdd([53,-8,245,-25,2,0]));

//35)
//regular
// function indexOfMaxElement(arr) {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
//     let res=arr.indexOf(max);
//     console.log(res);
// }
// indexOfMaxElement([53,-8,245,-25,2,0,900]);

//regular with return
// function indexOfMaxElement(arr) {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
//     let res=arr.indexOf(max);
//     return res;
// }
// console.log(indexOfMaxElement([53,-8,245,-25,2,0,900]));

//arrow func
// const indexOfMaxElement=(arr)=> {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
//     let res=arr.indexOf(max);
//     console.log(res);
// }
// indexOfMaxElement([53,-8,245,-25,2,0]);

//arrow with return
// const indexOfMaxElement=(arr)=> {
//     let max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
//     let res=arr.indexOf(max);
//     return res;
// }
// console.log(indexOfMaxElement([53,-8,245,-25,2,0,900]));

//36)
//regular
// function indexOfMinElement(arr) {
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity)
//     let res=arr.indexOf(min);
//     console.log(res);
// }
// indexOfMinElement([53,-8,245,-25,2,0,900]);

//regular with return
// function indexOfMinElement(arr) {
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity)
//     let res=arr.indexOf(min);
//     return res;
// }
// console.log(indexOfMinElement([53,-8,245,-25,2,0,900]));

//arrow func
// const indexOfMinElement=(arr)=> {
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity)
//     let res=arr.indexOf(min);
//     console.log(res);
// }
// indexOfMinElement([53,-8,245,-25,2,0,900]);

//arrow with return
// const indexOfMinElement=(arr)=> {
//     let min = arr.reduce((a, b) => Math.min(a, b), Infinity)
//     let res=arr.indexOf(min);
//     return res;
// }
// console.log(indexOfMinElement([53,-8,245,-25,2,0,900]));

//37)
//regular
// function compareCountOfOddsAndEvens(arr) {
//     let odds = arr.filter(m => m % 2 == 1).length;
//     let evens = arr.filter(m => m % 2 == 0).length;
//     if (evens == odds) {
//         console.log("They are equal: " + odds);
//     }
//     else {
//         if (odds > evens) {
//             console.log("More odds: " + odds);
//         }
//         if (odds < evens) {
//             console.log("More evens: " + evens);

//         }
//     }
// }
// compareCountOfOddsAndEvens([1, 2, 3, 4, 5, 6, 8]);

//regular with return
// function compareCountOfOddsAndEvens(arr) {
//     let odds = arr.filter(m => m % 2 == 1).length;
//     let evens = arr.filter(m => m % 2 == 0).length;
//     if (evens == odds) {
//         return "They are equal: " + odds;
//     }
//     else {
//         if (odds > evens) {
//             return "More odds: " + odds;
//         }
//         if (odds < evens) {
//             return "More evens: " + evens;

//         }
//     }
// }
// console.log(compareCountOfOddsAndEvens([1, 2, 3, 4, 5, 6, 8]));

//arrow func
// const compareCountOfOddsAndEvens=(arr)=> {
//     let odds = arr.filter(m => m % 2 == 1).length;
//     let evens = arr.filter(m => m % 2 == 0).length;
//     if (evens == odds) {
//         console.log("They are equal: " + odds);
//     }
//     else {
//         if (odds > evens) {
//             console.log("More odds: " + odds);
//         }
//         if (odds < evens) {
//             console.log("More evens: " + evens);

//         }
//     }
// }
// compareCountOfOddsAndEvens([1, 2, 3, 4, 5, 6, 8]);

//arrow with return
// const compareCountOfOddsAndEvens=(arr)=> {
//     let odds = arr.filter(m => m % 2 == 1).length;
//     let evens = arr.filter(m => m % 2 == 0).length;
//     if (evens == odds) {
//         return "They are equal: " + odds;
//     }
//     else {
//         if (odds > evens) {
//             return "More odds: " + odds;
//         }
//         if (odds < evens) {
//             return "More evens: " + evens;

//         }
//     }
// }
// console.log(compareCountOfOddsAndEvens([1, 2, 3, 4, 5, 6, 8]));

//38)
//regular
// function notRepeated(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let count=arr.filter(m=>m==arr[i]).length;
//         if(count==1){
//             console.log(arr[i]);
//         }
//     }
// }
// notRepeated([1,2, 2, 3, 4, 5, 6, 8]);

//regular with return
// function notRepeated(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let count = arr.filter(m => m == arr[i]).length;
//         if (count == 1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(notRepeated([1, 2, 3, 4, 5, 6,6, 8]));

//arrow func
// const notRepeated=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         let count=arr.filter(m=>m==arr[i]).length;
//         if(count==1){
//             console.log(arr[i]);
//         }
//     }
// }
// notRepeated([1,2, 2, 3, 4, 5, 6, 8]);

//arrow with return
// const notRepeated=(arr)=> {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let count = arr.filter(m => m == arr[i]).length;
//         if (count == 1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(notRepeated([1, 2, 3, 4, 5, 6,6, 8]));

//39)
//regular
// function countRepeated(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let res = arr.filter(m => m == arr[i]).length;
//         if (res > 1 && arr.indexOf(arr[i]) == i) {
//             count++;
//         }
//     }
//     console.log(count);

// }
// countRepeated([1, 2, 2, 3, 3, 4, , 5, 5, 6, 8]);

//regular with return
// function countRepeated(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let res = arr.filter(m => m == arr[i]).length;
//         if (res > 1 && arr.indexOf(arr[i]) == i) {
//             count++;
//         }
//     }
//     return count;

// }
// console.log(countRepeated([1, 2, 2, 3, 3, 4, , 5, 5, 6, 8]));

//arrow func
// const countRepeated=(arr)=> {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let res = arr.filter(m => m == arr[i]).length;
//         if (res > 1 && arr.indexOf(arr[i]) == i) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countRepeated([1, 2, 2, 3, 3, 4, , 5, 5, 6, 8]);

//arrow with return
// const countRepeated=(arr)=> {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let res = arr.filter(m => m == arr[i]).length;
//         if (res > 1 && arr.indexOf(arr[i]) == i) {
//             count++;
//         }
//     }
//     return count;

// }
// console.log(countRepeated([1, 2, 2, 3, 3, 4, , 5, 5, 6, 8]));

//40)
//regular
// function reversedArray(arr) {
//     console.log(arr.reverse());
// }
// reversedArray([1, 2, 3, 4, 5, 6, 6, 8]);

//regular with return
// function reversedArray(arr) {
//     return arr.reverse()
// }
// console.log(reversedArray([1, 2, 3, 4, 5, 6, 6, 8]));

//arrow func
// const reversedArray=(arr)=> {
//     console.log(arr.reverse());
// }
// reversedArray([1, 2, 3, 4, 5, 6, 6, 8]);

//arrow with return
// const reversedArray=(arr)=> {
//     return arr.reverse()
// }
// console.log(reversedArray([1, 2, 3, 4, 5, 6, 6, 8]));

//41)
//regular
// function secondMax(arr){
//     arr.sort((a, b) => b - a);
//     console.log(arr[1]);
// }
// secondMax([1, 2, 3, 4, 5, 6, 6, 8]);

//regular with return
// function secondMax(arr){
//     arr.sort((a, b) => b - a);
//     return arr[1];
// }
// console.log(secondMax([1, 2, 3, 4, 5, 6, 6, 8]));

//arrow func
// const secondMax=(arr)=>{
//     arr.sort((a, b) => b - a);
//     console.log(arr[1]);
// }
// secondMax([1, 2, 3, 4, 5, 6, 6, 8]);

//arrow with return
// const secondMax=(arr)=>{
//     arr.sort((a, b) => b - a);
//     return arr[1];
// }
// console.log(secondMax([1, 2, 3, 4, 5, 6, 6, 8]));

//42)
//regular
// function secondMin(arr) {
//     arr.sort((a, b) => a - b);
//     console.log(arr[1]);
// }
// secondMin([1, 2, 3, 4, 5, 6, 6, 8]);

//regular with return
// function secondMin(arr) {
//     arr.sort((a, b) => a - b);
//     return arr[1];
// }
// console.log(secondMin([1, 2, 3, 4, 5, 6, 6, 8]));

//arrow func
// const secondMin=(arr)=> {
//     arr.sort((a, b) => a - b);
//     console.log(arr[1]);
// }
// secondMin([1, 2, 3, 4, 5, 6, 6, 8]);

//arrow with return
// const secondMin=(arr)=> {
//     arr.sort((a, b) => a - b);
//     return arr[1];
// }
// console.log(secondMin([1, 2, 3, 4, 5, 6, 6, 8]));

//43)
//regular
// function secondMax(arr){
//     arr.sort((a, b) => b - a);
//     let res=arr[0]+arr[1];
//     console.log(res);
// }
// secondMax([1, 2, 3, 4, 5, 6, 6, 8]);

//regular with return
// function secondMax(arr){
//     arr.sort((a, b) => b - a);
//     let res=arr[0]+arr[1];
//     return res;

// }
// console.log(secondMax([1, 2, 3, 4, 5, 6, 6, 8]));

//arrow func
// const secondMax=(arr)=>{
//     arr.sort((a, b) => b - a);
//     let res=arr[0]+arr[1];
//     console.log(res);
// }
// secondMax([1, 2, 3, 4, 5, 6, 6, 8]);

//arrow with return
// const secondMax=(arr)=>{
//     arr.sort((a, b) => b - a);
//     let res=arr[0]+arr[1];
//     return res;

// }
// console.log(secondMax([1, 2, 3, 4, 5, 6, 6, 8]));

//44)
//regular
// function negativeToPositive(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             arr[i]=-arr[i]
//         }
//     }
//     console.log(arr);
// }
// negativeToPositive([5,78,-8,25,0,-532]);

//regular with return
// function negativeToPositive(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             arr[i]=-arr[i]
//         }
//     }
//     return arr;
// }
// console.log(negativeToPositive([5,78,-8,25,0,-532]));

//arrow func
// const negativeToPositive=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             arr[i]=-arr[i]
//         }
//     }
//     console.log(arr);
// }
// negativeToPositive([5,78,-8,25,0,-532]);

//arrow with return
// const negativeToPositive=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<0){
//             arr[i]=-arr[i]
//         }
//     }
//     return arr;
// }
// console.log(negativeToPositive([5,78,-8,25,0,-532]));

//45)
//regular 
// function seperateEvensAndOdds(arr){
//     let evens=arr.filter(m=>m%2==0);
//     let odds=arr.filter(m=>m%2==1);
//     console.log(evens);
//     console.log(odds);
// }
// seperateEvensAndOdds([3,6,4,7,21,89]);

//regular with return
// function seperateEvensAndOdds(arr){
//     let evens=arr.filter(m=>m%2==0);
//     let odds=arr.filter(m=>m%2==1);
//     return "evens: "+ evens + " odds: " + odds;

// }
// console.log(seperateEvensAndOdds([3,6,4,7,21,89]));

//arrow func
// const seperateEvensAndOdds=(arr)=>{
//     let evens=arr.filter(m=>m%2==0);
//     let odds=arr.filter(m=>m%2==1);
//     console.log(evens);
//     console.log(odds);
// }
// seperateEvensAndOdds([3,6,4,7,21,89]);

//arrow with return
// const seperateEvensAndOdds=(arr)=>{
//     let evens=arr.filter(m=>m%2==0);
//     let odds=arr.filter(m=>m%2==1);
//     return "evens: "+ evens + " odds: " + odds;

// }
// console.log(seperateEvensAndOdds([3,6,4,7,21,89]));

//46)
//regular 
// function result(arr){
//     let sum1=0;
//     let sum2=0;
//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%3==0){
//         sum1+=arr[i]
//     }
//     else{
//         sum2+=arr[i];
//     }
//    }
//    let res=sum1-sum2;
//    console.log(res);
// }
// result([3,63,1,8]);

//regular with return
// function result(arr){
//     let sum1=0;
//     let sum2=0;
//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%3==0){
//         sum1+=arr[i]
//     }
//     else{
//         sum2+=arr[i];
//     }
//    }
//    let res=sum1-sum2;
//    return res;
// }
// console.log(result([3,63,1,8]));

//arrow func
// const result=(arr)=>{
//     let sum1=0;
//     let sum2=0;
//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%3==0){
//         sum1+=arr[i]
//     }
//     else{
//         sum2+=arr[i];
//     }
//    }
//    let res=sum1-sum2;
//    console.log(res);
// }
// result([3,63,1,8]);

//arrow with return
// const result=(arr)=>{
//     let sum1=0;
//     let sum2=0;
//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i]%3==0){
//         sum1+=arr[i]
//     }
//     else{
//         sum2+=arr[i];
//     }
//    }
//    let res=sum1-sum2;
//    return res;
// }
// console.log(result([3,63,1,8]));

//47)
//regular
// function nextTo(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {
//             console.log(arr[i] + ", " + arr[i + 1]);
//         }
//     }
// }
// nextTo([3,3,63,1,1,8]);

//regular with return
// function nextTo(arr) {
//     let twins=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {
//             twins.push(arr[i]);
//             twins.push(arr[i+1]);
//         }
//     }
//     return twins
// }
// console.log(nextTo([3,3,63,1,1,8]));

//arrow func
// const nextTo=(arr)=> {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {
//             console.log(arr[i] + ", " + arr[i + 1]);
//         }
//     }
// }
// nextTo([3,3,63,1,1,8]);

//arrow with return
// const nextTo=(arr)=> {
//     let twins=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == arr[i + 1]) {
//             twins.push(arr[i]);
//             twins.push(arr[i+1]);
//         }
//     }
//     return twins
// }
// console.log(nextTo([3,3,63,1,1,8]));

//48)
//regular
// function mostRepeated(arr){
//     let maxCount=0;
//     let res;
//     for (let i = 0; i < arr.length; i++) {
//         let count=arr.filter(m=>m==arr[i]).length;
//         if(count>maxCount){
//             maxCount=count;
//             res=arr[i];
//         }
//     }
//     console.log(res);
// }
// mostRepeated([3,3,2,2,2,2,63,1,1,8]);

//regular with return
// function mostRepeated(arr){
//     let maxCount=0;
//     let res;
//     for (let i = 0; i < arr.length; i++) {
//         let count=arr.filter(m=>m==arr[i]).length;
//         if(count>maxCount){
//             maxCount=count;
//             res=arr[i];
//         }
//     }
//     return res;
// }
// console.log(mostRepeated([3,3,2,2,2,2,63,1,1,8]));

//arrow func
// const mostRepeated=(arr)=>{
//     let maxCount=0;
//     let res;
//     for (let i = 0; i < arr.length; i++) {
//         let count=arr.filter(m=>m==arr[i]).length;
//         if(count>maxCount){
//             maxCount=count;
//             res=arr[i];
//         }
//     }
//     console.log(res);
// }
// mostRepeated([3,3,2,2,2,2,63,1,1,8]);

//arrow with return
// const mostRepeated=(arr)=>{
//     let maxCount=0;
//     let res;
//     for (let i = 0; i < arr.length; i++) {
//         let count=arr.filter(m=>m==arr[i]).length;
//         if(count>maxCount){
//             maxCount=count;
//             res=arr[i];
//         }
//     }
//     return res;
// }
// console.log(mostRepeated([3,3,2,2,2,2,63,1,1,8]));

//49)
//regular
// function commonElements(arr1,arr2){
//     let common=[];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//            if(arr1[i]==arr2[j]){
//             common.push(arr1[i]);
//            }
//         }
//     }
//     console.log(common);
// }
// commonElements([31,56,1,4],[67,7,4,9,1]);

//regular with return
// function commonElements(arr1,arr2){
//     let common=[];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//            if(arr1[i]==arr2[j]){
//             common.push(arr1[i]);
//            }
//         }
//     }
//     return common;
// }
// console.log(commonElements([31,56,1,4],[67,7,4,9,1]));

//arrow func
// const commonElements=(arr1,arr2)=>{
//     let common=[];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//            if(arr1[i]==arr2[j]){
//             common.push(arr1[i]);
//            }
//         }
//     }
//     console.log(common);
// }
// commonElements([31,56,1,4],[67,7,4,9,1]);

//arrow with return
// const commonElements=(arr1,arr2)=>{
//     let common=[];
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//            if(arr1[i]==arr2[j]){
//             common.push(arr1[i]);
//            }
//         }
//     }
//     return common;
// }
// console.log(commonElements([31,56,1,4],[67,7,4,9,1]));

//50)
//regular 
// function isAscending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             console.log("Artan sira deyil");
//             return;
//         }
//     }
//     console.log("Artan siradir");
// }
// isAscending([1, 2, 3, 4, 5,1]);

//regular with return
// function isAscending(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return "Artan sira deyil";
            
//         }
//     }
//     return"Artan siradir";
// }
// console.log(isAscending([1, 2, 3, 4, 5]));

//arrow func
// const isAscending=(arr)=> {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             console.log("Artan sira deyil");
//             return;
//         }
//     }
//     console.log("Artan siradir");
// }
// isAscending([1, 2, 3, 4, 5,1]);

//arrow with return
// const isAscending=(arr)=> {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return "Artan sira deyil";
            
//         }
//     }
//     return"Artan siradir";
// }
// console.log(isAscending([1, 2, 3, 4, 5]));

// 1.write a program to print 10 numbers using for loop and write same program suing while and do-while loop?
console.log("question-1");
var a=0;
for (i=a ;i<=10 ;i++){
    console.log(i);
}
console.log("i  out of loop:-",i);

console.log("Do while loop");
do{
    a+=1
    console.log(a);
    
}
while (a<=10);

var b=0;
console.log("While loop");
while (b<=10){
    b++;
    console.log(b);
    
}
// 2.write a program to print even numbers using for loop and write same program suing while and do-while loop?
console.log("question-2");

a1=1
for(j=a1;j<=10;j++){
    if (j%2==0){
        console.log(j);
    }
    
}
console.log("Do while loop");
do{
    
    if(a1%2==0){
        console.log(a1);        
    }
    a1+=1          
}
while (a1<=10 );

console.log("while loop");
var a2=1
while(a2<=10){

    if(a2%2==0){
        console.log(a2);  
    }
    a2++;
}
// 3.write a program to print odd numbers using for loop and write same program suing while and do-while loop?
console.log("question-3");

a3=1
for(j=a3;j<=13;j++){
    if (j%2==1){
        console.log(j);
    }
    
}
console.log("Do while loop");
do{
    if(a3%2==1){
        console.log(a3);        
    }
    a3+=1          
}
while (a3<=12 );

console.log("while loop");
var a4=1
while(a4<=16){

    if(a4%2==1){
        console.log(a4);  
    }
    a4++;
}

// 4.write a program to console the marks grade D using conditional statements and the marks for D grade is b/w the 35 and 45 ?
console.log("question-4");

var marks=40;
if(marks>=85){
    console.log("Grade-A"); 
}
else if(marks<85 && marks>=65){
    console.log("Grade-B");
}
else if(marks<65 && marks>=45){
    console.log("Grade-C");
}
else if(marks<45 && marks>=36){
    console.log("Grade-D");
}
else{
    console.log("FAIL");
    
}
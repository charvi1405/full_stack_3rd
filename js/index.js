// const arr = [10, 20, 30];
// arr.push(400);
// console.log(arr);

// const myobj = {
//     name:"GLA",
//     loc:"Mathura",};
// myobj.loc="Delhi";
// console.log(myobj);

// check no is amstrong or not 
function isArmstrong(n){
    let num = n;
    let temp = num;
    let num1 = num.toString().length;
    let sum = 0;
    while(temp > 0){
        let digit = temp % 10;
        sum = sum + digit ** num1;
        temp = Math.floor(temp / 10);
    }
    if(sum === num){
        return true;
        }
    else{
        return false;
        }
}
function checkAndShow(){
    let val = Number(document.getElementById("val").value);
    if(isArmstrong(val)){
        console.log("Armstrong number");
    }
    else{
        console.log("Not an Armstrong number");
    }
}







// WAP to store movie name with rating in a object list, display them on html using <ul>tag, perform CRUD operation.
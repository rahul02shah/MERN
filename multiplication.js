let a = 8;
let  j = 1;
multiplication =(input)=> {
    for (let i=1;i<=10;i++){
        console.log(input+"*"+i+"="+input*i);
    }
    while (j<=10){
        console.log(input+"*"+j+"="+input*j);
        j++;
    }
    do {
        console.log(input+"*"+j+"="+input*j);
        j++;
    }while (j<=10);
}
multiplication(a);
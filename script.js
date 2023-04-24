// #1 all odd values from 1 to 20
for (var i = 1; i<=20; i++){
    if (i % 2 === 1){
        console.log(i);
    }
}

// #2 all of the values that are evenly divisible by 3 from 100 down to 0
for (var i = 100; i > 0; i--){
    if (i % 3 === 0){
        console.log(i);
    }
}

// #3 all values in this sequence: 4, 2.5, 1, -0.5, -2, -3.5
var sequence = 0;
for (var i = 4; i >= -3.5; i-=1.5){
    console.log(i);
}


// #4 add all the values from 1-100 onto into variable sum and at the end console.log the result (1+2+3+4....) should get back 5050 at the end.
var sum = 0;
for (var i = 0; i <= 100; i++){
    sum += i;
    console.log(sum);
}


// #5 multiply all of the values from 1-12 into some variable product and at the end console.lg the result (1*2*3*... * 10 * 12. Should get back 479001600
var product = 1;
for ( i = 1; i <=12; i++){
    product = product * i;
    console.log(product);
}


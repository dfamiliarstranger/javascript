// declaring two variables

    let x,y,k;
    k=prompt("Enter your preferred operator: '\n' +_*/")
    x=parseInt(prompt("Enter the first number"));
    y=parseInt(prompt(" Enter the second number"));
    
    let addition = x + y;
    let subtraction = x - y;
    let multiplication = x * y;
    let division = x / y;

    if (k === "+"){
        alert("The sum of the given numbers are:" +addition);
    }

    else if (k === "-"){
        alert("The subtraction of the given numbers are:" +subtraction);
    }

    else if (k === "*"){
        alert("The subtraction of the given numbers are:" +multiplication);
    }

    else if (k === "/"){
        alert("The subtraction of the given numbers are:" +division);
    }

    else{
        alert("incorrect input")
    }
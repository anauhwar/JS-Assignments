var num = +prompt("Please Enter your marks","Marks");

// with IF Else statement

if (num >= 80 && num <= 100)
{
    console.log(`Marks are ${num} and Grade is A`);
}
else if (num >= 60 && num <=79)
{
    console.log(`Marks are ${num} and Grade is B`);
}
else if (num >= 40 && num <= 59)
{
    console.log(`Marks are ${num} and Grade is C`);
}
else if (num >= 30 && num <= 39)
{
    console.log(`Marks are ${num} and Grade is D`);
}
else if(num >= 0 && num <= 29)
{
    console.log(`Marks are ${num} and Grade is Fail`);
}

// With Switch statement

switch(true)
{
    case(num >= 80 && num <= 100):
        console.log(`Marks are ${num} and Grade is A`);
        break;

    case (num >= 60 && num <=79):
        console.log(`Marks are ${num} and Grade is B`);
        break;

    case (num >= 40 && num <= 59):
        console.log(`Marks are ${num} and Grade is C`);
        break;
    
    case (num >= 30 && num <= 39) :
        console.log(`Marks are ${num} and Grade is D`);
        break;

    case (num >= 0 && num <= 29) :
        console.log(`Marks are ${num} and Grade is Fail`);
        break;

    default:
        console.log("Wrong input")

}
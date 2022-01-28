//Task 1


function getGrade(total){


if (total > 90 && total <= 100) {
    console.log ("This person has achieved a grade A+");
} else if (total > 80 && total <= 90){
    console.log("This person has achieved a grade A");
} else if (total > 70 && total <= 80){
    console.log('This person has achieved a grade B');
} else if (total > 60 && total <= 70){
    console.log("This person has achieved a grade C");
} else if (total > 50 && total <= 60){
    console.log ("This person has achieved a garde D");
} else if (total > 40 && total <= 50){
    console.log("This person has achieved a grade E");
} else if (total > 30 && total <= 40){
    console.log("This person has achieved a grade F");
} else if (total < 30 && total >= 0){
    console.log("This person has failed");
}
}
getGrade(66)
getGrade(10)


//Task 2
function getGrade(total){

     switch (true) {
        case total > 90 && total <= 100:
            console.log ("Grade A+");
            break;
        case total > 80 && total <= 90:
            console.log ("Grade A");
            break;
        case total > 70 && total <= 8:
            console.log ("Grade B");
            break;
        case total > 60 && total <= 70:
            console.log ("Grade C");
            break;
        case total > 50 && total <= 60 :
            console.log ("Grade D");
            break;
        case total > 40 && total <= 50:
            console.log ("Grade E");
            break;
        case total > 30 && total <= 40:
            console.log ("Grade F");
            break;
        case total < 30 && total >= 0 :
            console.log ("Failed");
            break;
        default:
            console.log("Undecided");   
    }
}

getGrade(97)
getGrade(109)
/*The following code is syntactically correct, but it appears to contain a logical error. 
Can you find the error? Identify and rewrite the correct one. Give reason.
if (score >= 90)
    grade = "A";
if (score >= 80)
    grade = "B";
if (score >= 70)
    grade = "C";
if (score >= 60)
    grade = "D";
else
    grade = "F";*/


/*This all If will execute .We want 1 result .So if 1 condition is true we dont want to  check further conditions.*/

score = 70;
if (score >= 90)
   console.log ("grade = A");
else if(score >= 80)
    console.log("grade = B");
else if(score >= 70)
   console.log ("grade = C ");
else if(score >= 60)
   console.log("grade = D");
else
{
    console.log ("grade = F");
}

